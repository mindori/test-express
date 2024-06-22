const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const response = await axios.get(`https://www.naver.com`);
  res.send(response);
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
