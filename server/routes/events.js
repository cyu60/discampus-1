const express = require("express");
const path = require('path');
require('dotenv').config();

const Event = require("../models/Event.js");
const Attendee = require("../models/Attendee.js");
const Numbers = require("twilio/lib/rest/Numbers.js");
const { PhoneNumberInstance } = require("twilio/lib/rest/lookups/v1/phoneNumber.js");
const router = express.Router();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);


// get all events 
router.get("/events", async (req, res, next) => {
    const events = await Event.find()



    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: 'jmiran15@jhu.edu', // Change to your recipient
    from: 'discampusevents@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })





	res.send(events)
});

// get event by id
// router.get("/events/:id", async (req, res, next) => {

// });

// post an event
router.post("/events", async (req, res) => {

    // saving the event
	const event = new Event({
		description: req.body.description,
        categories: req.body.categories
	})
	await event.save()

    const phoneNumbers = new Set();

    // finding the phone numbers it applies to 
    for (const category of req.body.categories) {
        const attendees = await Attendee.find({ interests: { $elemMatch: { $eq: category} } });

        let numbers_ = attendees.map((attendee) => attendee.phoneNumber);
        for (const phoneNumber of numbers_) {
            phoneNumbers.add(phoneNumber);
        }
    }


    // res.send({a: [...phoneNumbers]});
    let numMessages = 0;
    phoneNumbers.forEach(async (phoneNumber) => {
        try {
            const message = await client.messages.create({
                body: `${event.description}`,
                from: `${myNumber}`,
                to: `+17328902578`
            })
            numMessages++;
        } catch (e) {
            console.log(e.message);
        }
    })

	res.json(numMessages);
});




module.exports = router