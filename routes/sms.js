"use strict";

const express = require('express');
const router  = express.Router();
let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;
let client = require('twilio')(accountSid, authToken);
let MessagingResponse = require('twilio').twiml.MessagingResponse;


module.exports = (knex) => {

  //Then, message is sent from kitchen to server indicating cook-time.
  router.post('/', (req, res) => {

    let twiml = new MessagingResponse();
    console.log(req);
    twiml.message('The Robots are coming! Head for the hills!');
  
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });

  return router

}


