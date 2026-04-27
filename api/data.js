const BLOB_URL = "https://jsonblob.com/api/jsonBlob/019dd035-4b18-7267-b0d8-2700c0d04bd3";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    try {
      const response = await fetch(BLOB_URL);
      const data = await response.json();
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({ error: "Failed to load" });
    }
  }

  if (req.method === "PUT") {
    try {
      const response = await fetch(BLOB_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
      if (response.ok) {
        return res.status(200).json({ success: true });
      }
      return res.status(500).json({ error: "Failed to save" });
    } catch (e) {
      return res.status(500).json({ error: "Failed to save" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
