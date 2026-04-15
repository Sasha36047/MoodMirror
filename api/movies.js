export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method Not Allowed" });

  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "TMDB_API_KEY is not set" });

  try {
    // Frontend sends mood; we translate to genre here to keep UI code unchanged.
    const mood = typeof req.query?.mood === "string" ? req.query.mood : "";
    const genreMap = {
      happy: "35",
      calm: "18",
      sad: "18",
      energetic: "28",
      tired: "16",
      stressed: "10749",
    };
    const with_genres =
      (typeof req.query?.with_genres === "string" && req.query.with_genres) ||
      (mood && genreMap[mood]) ||
      "";

    const url = new URL("https://api.themoviedb.org/3/discover/movie");
    url.searchParams.set("api_key", apiKey);
    url.searchParams.set("language", "ru-RU");
    url.searchParams.set("sort_by", "popularity.desc");
    if (with_genres) url.searchParams.set("with_genres", with_genres);

    const upstream = await fetch(url, {
      headers: { Accept: "application/json" },
    });

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader(
      "Content-Type",
      upstream.headers.get("content-type") || "application/json; charset=utf-8"
    );
    return res.send(text);
  } catch (_e) {
    return res.status(500).json({ error: "Upstream request failed" });
  }
}

