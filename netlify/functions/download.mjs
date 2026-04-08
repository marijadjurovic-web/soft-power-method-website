/**
 * Secure PDF download handler
 *
 * Flow:
 * 1. User clicks their unique link: /api/download?token=xxx
 * 2. We look up the token in Redis
 * 3. If valid → redirect to the PDF file
 * 4. If expired or missing → redirect to /boundary-protocol/expired/
 *
 * Environment variables required:
 *   UPSTASH_REDIS_REST_URL   — from upstash.com
 *   UPSTASH_REDIS_REST_TOKEN — from upstash.com
 *   PDF_FILENAME             — exact filename in /public/files/ (e.g. "boundary-protocol-a3f8b2c1.pdf")
 *   URL                      — auto-set by Netlify
 */

// ─── Upstash Redis ────────────────────────────────────────────────────────────

async function redisGet(key) {
  const url = `${process.env.UPSTASH_REDIS_REST_URL}/get/${encodeURIComponent(key)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Redis GET failed: ${res.status}`);
  const data = await res.json();
  return data.result ? JSON.parse(data.result) : null;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export const handler = async (event) => {
  const siteUrl = process.env.URL || "https://thesoftpowermethod.com";
  const expiredUrl = `${siteUrl}/boundary-protocol/expired/`;

  // Extract token from query string
  const token = event.queryStringParameters?.token;

  if (!token) {
    return {
      statusCode: 302,
      headers: { Location: expiredUrl },
      body: "",
    };
  }

  // Look up token in Redis
  let record;
  try {
    record = await redisGet(`download:${token}`);
  } catch (err) {
    console.error("Redis lookup error:", err);
    return {
      statusCode: 302,
      headers: { Location: expiredUrl },
      body: "",
    };
  }

  // Token not found or expired (Redis auto-deletes after TTL)
  if (!record) {
    console.log(`Token not found or expired: ${token.slice(0, 8)}...`);
    return {
      statusCode: 302,
      headers: { Location: expiredUrl },
      body: "",
    };
  }

  // Valid token — redirect to PDF
  const pdfFilename = process.env.PDF_FILENAME;
  if (!pdfFilename) {
    console.error("PDF_FILENAME environment variable not set");
    return {
      statusCode: 500,
      body: "Configuration error",
    };
  }

  const pdfUrl = `${siteUrl}/files/${pdfFilename}`;
  console.log(`Valid download for: ${record.email}`);

  return {
    statusCode: 302,
    headers: {
      Location: pdfUrl,
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
    body: "",
  };
};
