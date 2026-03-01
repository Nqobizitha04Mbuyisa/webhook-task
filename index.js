
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint
app.post("/webhook", (req, res) => {
  const { data } = req.body;

  // Validate input
  if (!data || typeof data !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }

  // Convert string → array → sort
  const sorted = data.split("").sort();

  // Return result
  res.json({
    word: sorted
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});