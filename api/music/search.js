export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const term = typeof req.query?.term === "string" ? req.query.term : "";
    const media = typeof req.query?.media === "string" ? req.query.media : "music";
    const entity = typeof req.query?.entity === "string" ? req.query.entity : "album,song";
    const limitRaw = typeof req.query?.limit === "string" ? req.query.limit : "8";
    const limit = Math.max(1, Math.min(50, Number(limitRaw) || 8));
    const lang = typeof req.query?.lang === "string" ? req.query.lang : "en_us";

    const url = new URL("https://itunes.apple.com/search");
    url.searchParams.set("term", term || "music");
    url.searchParams.set("media", media);
    url.searchParams.set("entity", entity);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("lang", lang);

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

