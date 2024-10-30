import express from "express";
import { createClient } from "redis";
const app = express();

app.use(express.json());

const client = createClient();

client.connect();

app.post("/submit", async (req, res) => {
  const { problemId, userId, code, language } = req.body;
  try {
    await client.lPush(
      "submissions",
      JSON.stringify({ problemId, userId, code, language })
    );
    res.json({ message: "Submission received" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
