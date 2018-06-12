const express = require("express");
const stripe = require("stripe");
const { json } = require("body-parser");
const port = 4000;

const app = express();

app.use(json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
