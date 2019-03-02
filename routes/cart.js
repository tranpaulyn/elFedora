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
    }) //First, message goes to Restaurant
    .then (function(res){
      client.messages.create({
        to: '17804995473',
        from: '12038067699',
        body: (req.body.orderTicket + '   ' + req.body.phoneNumber)
    })
  .then((message) => console.log((message.body).replace('Sent from your Twilio trial account - ', '')));    
})




  })

  return router}