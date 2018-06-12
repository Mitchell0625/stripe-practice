require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(`${process.env.STRIPE_SECRET}`);
const { json } = require("body-parser");
const port = 4000;

const app = express();

app.use(json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
