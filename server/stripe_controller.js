module.exports = {
  makeCharge: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log("hit");
    console.log(req.body);
    const token = req.body.stripeToken;

    stripe.charges.create(
      {
        amount: req.body.amount,
        currency: "usd",
        source: token,
        description: `Charge for ${req.body.name}`
      },
      (err, charge) => {
        dbInstance
          .make_charge([req.body.name, req.body.amount])
          .then(() => {
            res.status(200).json({ message: "Transaction successful" });
          })
          .catch(e => console.log(e));
      }
    );
  }
};
