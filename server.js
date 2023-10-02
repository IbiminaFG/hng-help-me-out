// server.js
const express = require("express");
const app = express();
const multer = require("multer"); // For handling file uploads
const path = require("path");

const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

app.post("/upload", upload.single("video"), (req, res) => {
  // Handle the uploaded video file here
  // You can save it to disk or perform any processing you need
  const videoData = req.file.buffer; // The video data in a buffer

  // Send a response back if needed
  res.json({ success: true, message: "Video uploaded successfully" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
