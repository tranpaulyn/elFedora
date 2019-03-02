"use strict";

const express = require('express');
const router  = express.Router();

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
      console.log('NICE ONE')
    })

    console.log(req.body.customerName);

  })

  return router}