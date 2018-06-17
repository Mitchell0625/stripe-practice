require("dotenv").config();
const express = require("express");

const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const port = 4000;

const app = express();

const { makeCharge } = require(`${__dirname}/stripe_controller`);

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
app.post(`/card/payment`, makeCharge);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
