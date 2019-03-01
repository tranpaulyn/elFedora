// Mount all resource routes user.js
app.use("/api/menu", menuRoutes(knex));


// menu.js
"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("menu")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}

// Append Users app.js
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/menus"
    }).done((users) => {
      for(user of users) {
        $("<p>").text(user.name).appendTo($(".food-name"));
      }
    });;
  });
