const express = require("express");
require('dotenv').config();

const Event = require("../models/Event.js");
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);


// get all events 
router.get("/events", async (req, res, next) => {
    const events = await Event.find()
	res.send(events)
});

// get event by id
// router.get("/events/:id", async (req, res, next) => {

// });

// post an event
router.post("/events", async (req, res) => {
	const event = new Event({
		description: req.body.description,
	})
	await event.save()

    const message = await client.messages.create({
        body: `${event.description}`,
        from: `+${myNumber}`,
        to: '+14075801974'
    })

	res.send(message.sid);
});


module.exports = router