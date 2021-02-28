const express = require("express");
const db = require("../models/index.js");
const review = require("../models/review.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.Event.findAll({})
    .then(data => {
      const events = data.map(event => ({
        event_name: event.event_name,
        event_location: event.event_location,
        event_image: event.event_image,
        id: event.id
      }));
      console.log(events);
      res.render("index", { events: events });
    })
    .catch(err => console.log(err));
});

router.get("/review/:eventid", (req, res) => {
  const eventid = req.params.eventid;
  let eventData = [];
  const reviewData = [];
  db.Event.findOne({
    where: {
      id: eventid
    }
  })
    .then(data => {
      eventData = data;
      db.Review.findAll({
        where: {
          event_id: eventid
        }
      }).then(reviews => {
        const events = [eventData].map(event => ({
          event_name: event.event_name,
          event_location: event.event_location,
          event_image: event.event_image,
          id: event.id
        }));

        const reviewss = reviews.map(review => ({
          client_name: review.client_name,
          client_comment: review.client_comment,
          event_id: review.event_id
        }));
        console.log(reviewss);
        console.log(events);
        const { event_image, event_location, event_name } = events[0];
        res.render("review", {
          event_image,
          event_location,
          event_name,
          eventid,
          reviewss
        });
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
