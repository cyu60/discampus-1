const express = require("express");
const { createIndexes } = require("../models/Attendee.js");
const Attendee = require("../models/Attendee.js");
const router = express.Router();


// get all attendees 
router.get("/attendee", async (req, res, next) => {
    try {
        const attendees = await Attendee.find()
        res.send(events)
    } catch (e) {
        res.send(e.message)
    }
});

// get attendee by id
//router.get("/attendee/:id", async (req, res, next) => {

//});

router.get("/attendee/:")

// add a new attendee
router.post("/attendee", async (req, res) => {
    const attendee = new Attendee({
        email: req.body.email,
        interests: req.body.interests,
        phone: req.body.phone,
        major: req.body.major,
        year: req.body.year
    });
    try {
        await attendee.save();
        res.send("Attendee successfully created");
    } catch (e) {
        res.send(e.message);
    }
});

module.exports = router