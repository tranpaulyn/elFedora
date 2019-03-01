"use strict";

require('dotenv').config();

// const PORT        = process.env.PORT || 8080;
let port = process.env.PORT || 5000;
if (port == null || port == "") {
  port = 8000;
}
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// SMS capability
//First, message goes to Restaurant
app.post("/sendOrder", (req, res) => {
let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;
let client = require('twilio')(accountSid, authToken);
let order = //Select with Knex
let phoneNumber = //Phone number from table

  client.messages.create({
    to: '17804995473',
    from: '12038067699',
    body: 'Incoming Order#' + order ''
  });
});


//Then, message is sent from kitchen to server indicating cook-time.
app.post('/sms', (req, res) => {
  let accountSid = process.env.TWILIO_ACCOUNT_SID;
  let authToken = process.env.TWILIO_AUTH_TOKEN;
  let client = require('twilio')(accountSid, authToken);
  let smsTextBerry = (req.body).replace('Sent from your Twilio trail account - ', '');

  client.messages.create({
    to: knex('')
    from: '12038067699',
    body: "Your order will be available for pickup in " + smsTextBerry + " minutes. See you soon!"
  });
});
// app.listen(PORT, () => {
//   console.log("Example app listening on port " + PORT);
// });
app.listen(port);

console.log("Example app listening on port" + port);