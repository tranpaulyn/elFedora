"use strict";

const express = require('express');
const router  = express.Router();
let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;
let client = require('twilio')(accountSid, authToken);

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("cart")
      .then((results) => {
        res.json(results);
    });
  });

  router.post("/", function(req, res) {
    knex('orders')
    .insert({
      customerName: req.body.customerName,
      phoneNumber: req.body.phoneNumber,
      totalPrice: req.body.totalPrice
    })
    .then (function(res){
      client.messages.create({
        to: req.body.phoneNumber,
        from: '12038067699',
        body: 'This is where the content of the order will go'
    })
  .then((message) => console.log((message.body).replace('Sent from your Twilio trial account - ', '')));    })

    console.log(req.body.customerName);

  })

  return router}