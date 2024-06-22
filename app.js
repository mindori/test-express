const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
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
