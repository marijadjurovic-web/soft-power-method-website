async function redisGet(key) {
  const url = `${process.env.UPSTASH_REDIS_REST_URL}/get/${encodeURIComponent(key)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Redis GET failed: ${res.status}`);
  const data = await res.json();
  return data.result ? JSON.parse(data.result) : null;
}

exports.handler = async (event) => {
  const siteUrl = process.env.URL || "https://thesoftpowermethod.com";
  const expiredUrl = `${siteUrl}/boundary-protocol/expired/`;

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: { "Access-Control-Allow-Origin": "*" }, body: "" };
  }

  const token = event.queryStringParameters && event.queryStringParameters.token;

  if (!token) {
    return { statusCode: 302, headers: { Location: expiredUrl }, body: "" };
  }

  let record;
  try {
    record = await redisGet(`download:${token}`);
  } catch (err) {
    console.error("Redis error:", err);
    return { statusCode: 302, headers: { Location: expiredUrl }, body: "" };
  }

  if (!record) {
    return { statusCode: 302, headers: { Location: expiredUrl }, body: "" };
  }

  const pdfFilename = process.env.PDF_FILENAME;
  if (!pdfFilename) {
    return { statusCode: 500, body: "PDF not configured" };
  }

  return {
    statusCode: 302,
    headers: {
      Location: `${siteUrl}/files/${pdfFilename}`,
      "Cache-Control": "no-store",
    },
    body: "",
  };
};
