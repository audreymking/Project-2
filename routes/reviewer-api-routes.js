const db = require("../models");

module.exports = app => {
  app.get("/api/reviewers", (req, res) => {
    db.Reviewer.findAll({
      include: [db.Review]
    }).then(dbReviewer => res.json(dbReviewer));
  });
  //GET route for retrieving a single reviewer
  app.get("/api/reviewers/:id", (req, res) => {
    db.Reviewer.findOne({
      where: {
        id: req.params.id
      },
      incluse: [db.Review]
    }).then(dbReviewer => res.json(dbReviewer));
  });
  //POST route for saving a new reviewer
  app.post("/api/reviewers", (req, res) => {
    db.Reviewer.create(req.body).then(dbReviewer => res.json(dbReviewer));
  });
  //DELETE route for deleting reviewers
  app.delete("/api/reviewer/:id", (req, res) => {
    db.Reviewer.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbReviewer => res.json(dbReviewer));
  });
};
