const express = require("express");
const Event = require("../models/Event.js");
const router = express.Router();


// get all events 
router.get("/events", async (req, res, next) => {

});

// get event by id
router.get("/events/:id", async (req, res, next) => {

});

// post an event
router.post("/events", async (req, res) => {

});


module.exports = router