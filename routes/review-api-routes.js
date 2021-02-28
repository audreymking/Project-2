const db = require("../models");

module.exports = app => {
  app.post("/api/reviews", (req, res) => {
    console.log(req.body);
    db.Review.create({
      client_name: req.body.client_name,
      client_comment: req.body.client_comment,
      event_id: req.body.event_id
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
