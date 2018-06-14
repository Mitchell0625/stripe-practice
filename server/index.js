require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(`${process.env.STRIPE_SECRET}`);
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const port = 4000;

const app = express();

const sc = require("./stripe_controller.js");

app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 200000000
    }
  })
);

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(console.log);

//Stripe endpoint
app.post(`/api/payment`, sc.makeCharge);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
