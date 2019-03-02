require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: customer, //make sure to declare the form entry body here to test the text capability 
    from: '12038067699',
    body: 'Your order will be ready in ' + timeToPickup + 'minutes. See you soon!'
})
.then((message) => console.log(message.sid));