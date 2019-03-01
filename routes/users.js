"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    console.log("shjdfzkdfjhdfjhdbfjsdbgjhsbfjghdfjgjdhfgbhj")
    knex
      .select("*")
      .orderBy('id')
      .from("users")
      .then((results) => {
        res.json(results.sort((a , b) => a.id - b.id));
    });
  });

  return router;
}
