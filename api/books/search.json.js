export default async function handler(req, res) {
  // CORS (allow same-origin and local dev tools)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const q = typeof req.query?.q === "string" ? req.query.q : "";
    const limitRaw = typeof req.query?.limit === "string" ? req.query.limit : "18";
    const limit = Math.max(1, Math.min(50, Number(limitRaw) || 18));

    const url = new URL("https://openlibrary.org/search.json");
    url.searchParams.set("q", q || "psychology");
    url.searchParams.set("limit", String(limit));

    const upstream = await fetch(url, {
      headers: { "Accept": "application/json" },
    });

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json; charset=utf-8");
    return res.send(text);
  } catch (e) {
    return res.status(500).json({ error: "Upstream request failed" });
  }
}

