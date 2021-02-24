const express = require("express");
const db = require("../models/index.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.Reviewer.findAll({}).then(data => {
    console.log(data);
    res.render("index", { db: data });
  });
});

module.exports = router;
