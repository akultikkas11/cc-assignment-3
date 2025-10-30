import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, prn, email } = req.body;

  // Basic validation
  if (!name || !prn || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Insert into database
  const sql = "INSERT INTO students (name, prn, email) VALUES (?, ?, ?)";
  db.query(sql, [name, prn, email], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Database error occurred." });
    }

    res.status(201).json({ message: "Student registered successfully!" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});