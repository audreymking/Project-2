const db = require("../models");

module.exports = app => {
  app.get("/api/reviews", (req, res) => {
    const query = {};
    if (req.query.reviewer_id) {
      query.ReviewerId = req.query.author_id;
    }
    db.Review.findAll({
      where: query,
      include: [db.Author]
    }).then(dbReview => res.json(dbReview));
  });
  //GET route for retrieving a single review
  app.get("/api/reviews/:id", (req, res) => {
    db.review
      .findOne({
        where: {
          id: req.params.id
        },
        include: [db.Reviewer]
      })
      .then(dbReview => res.json(dbReview));
  });
  //POST route for saving a new review
  app.post("/api/reviews", (req, res) => {
    db.Review.create(req.body).then(dbReview => res.json(dbReview));
  });
  //DELETE route for deleting reviews
  app.delete("/api/reviews/:id", (req, res) => {
    db.Review.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbReviewer => res.json(dbReviewer));
  });
};
