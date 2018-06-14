module.exports = {
  makeCharge: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);

    stripe.charges.create(
      {
        amount: req.body.amount,
        currency: "usd",
        source: "tok_amex",
        description: `Charge for ${req.body.user.name}`
      },
      (err, charge) => {
        dbInstance
          .make_charge([req.body.user.name, req.body.amount])
          .then(resp => {
            res.status(200).json({ message: "Transaction successful" });
          })
          .catch(e => console.log(e));
      }
    );
  }
};
