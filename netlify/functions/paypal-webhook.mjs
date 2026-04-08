/**
 * PayPal IPN (Instant Payment Notification) handler
 *
 * Flow:
 * 1. PayPal sends POST after successful payment
 * 2. We verify it with PayPal's servers
 * 3. We generate a unique download token (valid 7 days)
 * 4. We store it in Upstash Redis with automatic expiry
 * 5. We email the customer their unique download link via Resend
 *
 * Environment variables required (set in Netlify dashboard):
 *   UPSTASH_REDIS_REST_URL   — from upstash.com
 *   UPSTASH_REDIS_REST_TOKEN — from upstash.com
 *   RESEND_API_KEY           — from resend.com
 *   PAYPAL_SANDBOX           — "true" for testing, "false" for production
 *   URL                      — auto-set by Netlify (your site URL)
 */

import crypto from "crypto";

const TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

// ─── Upstash Redis (REST API, no package needed) ─────────────────────────────

async function redisSet(key, value) {
  const url = `${process.env.UPSTASH_REDIS_REST_URL}/set/${encodeURIComponent(key)}/${encodeURIComponent(JSON.stringify(value))}/ex/${TOKEN_TTL_SECONDS}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Redis SET failed: ${res.status}`);
}

// ─── Resend email ─────────────────────────────────────────────────────────────

async function sendDownloadEmail(to, downloadUrl) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Marija Djurović <hello@thesoftpowermethod.com>",
      to,
      subject: "The Boundary Protocol – your download link",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1B2230;">
          <p style="font-size: 18px; margin-bottom: 24px;">Thank you for your purchase.</p>

          <p>Your copy of <strong>The Boundary Protocol</strong> is ready.</p>

          <p style="margin: 32px 0;">
            <a href="${downloadUrl}"
               style="background: #C2A65A; color: #1B2230; padding: 14px 28px; text-decoration: none; font-weight: bold; display: inline-block;">
              Download The Boundary Protocol
            </a>
          </p>

          <p style="color: #666; font-size: 14px;">
            This link is valid for 7 days. If it expires before you download,
            reply to this email and I will send you a new one.
          </p>

          <p style="margin-top: 40px;">— Marija</p>
        </div>
      `,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend failed: ${err}`);
  }
}

// ─── PayPal IPN verification ──────────────────────────────────────────────────

async function verifyWithPayPal(rawBody, isSandbox) {
  const endpoint = isSandbox
    ? "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr"
    : "https://ipnpb.paypal.com/cgi-bin/webscr";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `cmd=_notify-validate&${rawBody}`,
  });
  return res.text(); // "VERIFIED" or "INVALID"
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export const handler = async (event) => {
  // PayPal always sends POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const rawBody = event.body;

  // Step 1: Verify with PayPal
  const isSandbox = process.env.PAYPAL_SANDBOX === "true";
  let verification;
  try {
    verification = await verifyWithPayPal(rawBody, isSandbox);
  } catch (err) {
    console.error("PayPal verification error:", err);
    return { statusCode: 200, body: "OK" }; // Always 200 to PayPal
  }

  if (verification !== "VERIFIED") {
    console.warn("IPN not verified:", verification);
    return { statusCode: 200, body: "OK" };
  }

  // Step 2: Parse IPN params
  const params = new URLSearchParams(rawBody);
  const paymentStatus = params.get("payment_status");
  const payerEmail = params.get("payer_email");

  // Only process completed payments
  if (paymentStatus !== "Completed" || !payerEmail) {
    return { statusCode: 200, body: "OK" };
  }

  console.log(`Payment completed for: ${payerEmail}`);

  // Step 3: Generate unique token
  const token = crypto.randomBytes(32).toString("hex"); // 64-char hex string

  // Step 4: Store in Redis (auto-expires after 7 days)
  try {
    await redisSet(`download:${token}`, {
      email: payerEmail,
      purchased_at: Date.now(),
      transaction_id: params.get("txn_id"),
    });
  } catch (err) {
    console.error("Redis error:", err);
    // Still try to send email even if Redis fails
  }

  // Step 5: Send email with unique download link
  const siteUrl = process.env.URL || "https://thesoftpowermethod.com";
  const downloadUrl = `${siteUrl}/boundary-protocol/download/?token=${token}`;

  try {
    await sendDownloadEmail(payerEmail, downloadUrl);
    console.log(`Download email sent to: ${payerEmail}`);
  } catch (err) {
    console.error("Email error:", err);
  }

  return { statusCode: 200, body: "OK" };
};
