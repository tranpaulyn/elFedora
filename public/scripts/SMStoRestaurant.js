const accountSID = require('./twilioSID');
const authToken = require('./twilioAuth');

const client = require('twilio')(accountSID, authToken);

client.messages.create({
    to: '17804995473',
    from: '12038067699',
    body: 'You\'re an idiot'
})
.then((message) => console.log(message.sid));