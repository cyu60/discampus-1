const express = require("express");
const { createIndexes } = require("../models/Attendee.js");
const Attendee = require("../models/Attendee.js");
const router = express.Router();

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