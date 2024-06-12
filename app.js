const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Mindori New World");
});

app.get("/healthz", (req, res) => {
  res.send("Healthy");
});

app.get("/readiness", (req, res) => {
  res.send("Available");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
