"use strict";

require('dotenv').config();

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


app.listen(port);
console.log("Example app listening on port" + port); 



// Seperated Routes for each Resource
const menuRoutes = require("./routes/menu");
const cartRoutes = require("./routes/cart");

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

// Mount all resource routes user.js
app.use("/api/menu", menuRoutes(knex));
app.use("/api/cart", cartRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});



// Connor's Twillio Stuff 
// SMS capability
//First, message goes to Restaurant
app.post("/sendOrder", (req, res) => {
  let accountSid = process.env.TWILIO_ACCOUNT_SID;
  let authToken = process.env.TWILIO_AUTH_TOKEN;
  let client = require('twilio')(accountSid, authToken);
  
    client.messages.create({
      to: '17804995473',
      from: '12038067699',
      body: 'This is where the content of the order will go'
  })
  .then((message) => console.log((message.body).replace('Sent from your Twilio trial account - ', '')));
  })
  
  //Then, message is sent from kitchen to server indicating cook-time.
  app.post('/sms', (req, res) => {
    let MessagingResponse = require('twilio').twiml.MessagingResponse;
    let twiml = new MessagingResponse();
    console.log(req);
    twiml.message('The Robots are coming! Head for the hills!');
  
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });





