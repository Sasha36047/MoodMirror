export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const path = typeof req.query?.path === "string" ? req.query.path : "";

    if (!path) {
      return res.status(400).json({ error: "Missing image path" });
    }

    const url = `https://image.tmdb.org/t/p/w500${path}`;
    const upstream = await fetch(url);

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: "Image fetch failed" });
    }

    const contentType = upstream.headers.get("content-type") || "image/jpeg";
    const arrayBuffer = await upstream.arrayBuffer();

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400");

    return res.status(200).send(Buffer.from(arrayBuffer));
  } catch (_e) {
    return res.status(500).json({ error: "Upstream image request failed" });
  }
}
