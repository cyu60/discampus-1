const express = require("express");
const path = require('path');
require('dotenv').config();
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


router.post('/send-verification', async (req, res) => {
    client.verify.services(process.env.VERIFY_SERVICE_SID)
      .verifications
      .create({to: `+${req.body.phoneNumber}`, channel: 'sms'})
      .then(verification => console.log(verification.status))
      .catch(e => {
        console.log(e)
        res.status(500).send(e);
      });
  
    res.sendStatus(200);
  });


  router.post('/verify-otp', async (req, res) => {
    const check = await client.verify.services(process.env.VERIFY_SERVICE_SID)
      .verificationChecks
      .create({to: `+${req.body.phoneNumber}`, code: req.body.otp})
      .catch(e => {
        console.log(e)
        res.status(500).send(e);
      });
  
    res.status(200).send(check);
  });

module.exports = router;