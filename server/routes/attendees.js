const express = require("express");
const { createIndexes } = require("../models/Attendee.js");
const Attendee = require("../models/Attendee.js");
const { route } = require("./events.js");
const router = express.Router();


router.get("/attendee", async (req, res) => {
    try {
    const attendees = await Attendee.find({});
    res.send(attendees);
    } catch (e) {
        res.status(404).json({"error": e.message});
    }
});


// add a new attendee
router.post("/attendee", async (req, res) => {
    const attendee = new Attendee({
        phoneNumber: req.body.phoneNumber,
        interests: req.body.interests,
        major: req.body.major,
        year: req.body.year
    });
    try {
        await attendee.save();
        res.send(attendee);
    } catch (e) {
        res.send(e.message);
    }
});

module.exports = router