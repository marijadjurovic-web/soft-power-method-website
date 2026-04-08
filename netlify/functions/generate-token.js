const crypto = require("crypto");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const TOKEN_TTL = 7 * 24 * 60 * 60; // 7 days in seconds

async function redisSet(key, value) {
  const url = `${process.env.UPSTASH_REDIS_REST_URL}/set/${encodeURIComponent(key)}/${encodeURIComponent(JSON.stringify(value))}/ex/${TOKEN_TTL}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Redis SET failed: ${res.status}`);
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: CORS, body: "Method Not Allowed" };
  }

  let email;
  try {
    email = JSON.parse(event.body || "{}").email;
  } catch {
    return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  if (!email) {
    return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: "email is required" }) };
  }

  const token = crypto.randomBytes(32).toString("hex");

  try {
    await redisSet(`download:${token}`, { email, purchased_at: Date.now() });
  } catch (err) {
    console.error("Redis error:", err);
    return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: "Failed to store token" }) };
  }

  const siteUrl = process.env.URL || "https://thesoftpowermethod.com";
  const downloadUrl = `${siteUrl}/boundary-protocol/download/?token=${token}`;

  return {
    statusCode: 200,
    headers: { ...CORS, "Content-Type": "application/json" },
    body: JSON.stringify({ token, download_url: downloadUrl }),
  };
};
