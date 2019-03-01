require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '17804995473',
    from: '12038067699',
    body: 'You\'re an idiot also poop'
})
.then((message) => console.log((message.body).replace('Sent from your Twilio trial account - ', '')));