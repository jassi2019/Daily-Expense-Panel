let BLOB_URL = "https://jsonblob.com/api/jsonBlob/019dd7b2-c59a-71a9-bf8c-403150dcdb0d";

async function ensureBlob() {
  // Check if blob exists
  const check = await fetch(BLOB_URL);
  if (check.ok) return true;

  // Blob expired/deleted — create new one
  const create = await fetch("https://jsonblob.com/api/jsonBlob", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "[]",
  });

  if (create.ok) {
    const newId = create.headers.get("x-jsonblob-id");
    if (newId) {
      BLOB_URL = "https://jsonblob.com/api/jsonBlob/" + newId;
      return true;
    }
  }
  return false;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    try {
      await ensureBlob();
      const response = await fetch(BLOB_URL);
      if (!response.ok) return res.status(200).json([]);
      const data = await response.json();
      return res.status(200).json(data);
    } catch (e) {
      return res.status(200).json([]);
    }
  }

  if (req.method === "PUT") {
    try {
      await ensureBlob();
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
