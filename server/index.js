require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(`${process.env.STRIPE_SECRET}`);
const { json } = require("body-parser");
const massive = require("massive");
const port = 4000;

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(console.log);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
