const express = require("express");
const db = require("../models/index.js");
const router = express.Router();

router.get("/", (_req, res) => {
  db.Event.findAll({})
    .then(data => {
      console.log(data);
      res.render("index", { db: data });
    })
    .catch(err => console.log(err));
});

module.exports = router;
