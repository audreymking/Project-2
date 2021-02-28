const db = require("../models");

module.exports = app => {
  app.post("/api/reviews", (req, res) => {
    db.Review.create({
      party_name: req.body.party_name,
      client_comment: req.body.client_comment,
      client_rate: req.body.client_rate
    })
      .then(() => {
        console.log(client_comment);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
