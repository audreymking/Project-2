const express = require("express");
const db = require("../models/index.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.Event.findAll({})
    .then(data => {
      const events = data.map(event => ({
        event_name: event.event_name,
        event_location: event.event_location
      }));
      console.log(events);
      res.render("index", { events: events });
    })
    .catch(err => console.log(err));
});

router.get("/review/:eventid", (req, res) => {
  const eventid = req.params.eventid;
  db.Event.findOne({
    where: {
      id: eventid
    }
  })
    .then(data => {
      const events = [data].map(event => ({
        event_name: event.event_name,
        event_location: event.event_location
      }));
      console.log(events);
      console.log(eventid);
      res.render("review");
    })
    .catch(err => console.log(err));
});

module.exports = router;
