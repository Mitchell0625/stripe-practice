stripe.charges.create(
  {
    amount: req.body.amount,
    currency: "usd",
    source: "tok_amex",
    description: `Charge for ${req.body.user.name}`
  },
  function(err, charge) {}
);
