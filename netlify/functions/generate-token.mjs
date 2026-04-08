/**
 * Token generator — called by Make.com after PayPal payment
 *
 * Make.com sends a POST with the customer's email.
 * This function generates a unique download token, stores it in
 * Upstash Redis with a 7-day TTL, and returns the download URL
 * for Make.com to pass to MailerLite.
 *
 * Request (JSON body):
 *   { "email": "customer@example.com" }
 *
 * Response (JSON):
 *   { "token": "a3f8...", "download_url": "https://thesoftpowermethod.com/boundary-protocol/download/?token=a3f8..." }
 *
 * Environment variables required:
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 *   URL  (auto-set by Netlify)
 *
 * Netlify route: /api/generate-token  (set in netlify.toml)
 */

import crypto from "crypto";

const TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

async function redisSet(key, value) {
  const url = `${process.env.UPSTASH_REDIS_REST_URL}/set/${encodeURIComponent(key)}/${encodeURIComponent(JSON.stringify(value))}/ex/${TOKEN_TTL_SECONDS}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Redis SET failed: ${res.status}`);
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let email;
  try {
    const body = JSON.parse(event.body || "{}");
    email = body.email;
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: "email is required" }) };
  }

  // Generate unique token
  const token = crypto.randomBytes(32).toString("hex");

  // Store in Redis (auto-expires after 7 days)
  try {
    await redisSet(`download:${token}`, {
      email,
      purchased_at: Date.now(),
    });
  } catch (err) {
    console.error("Redis error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to store token" }) };
  }

  const siteUrl = process.env.URL || "https://thesoftpowermethod.com";
  const downloadUrl = `${siteUrl}/boundary-protocol/download/?token=${token}`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, download_url: downloadUrl }),
  };
};
