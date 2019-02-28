const accountSID = require('/twilioSID');
const authToken = require('/twilioAuth');

const client = require('twilio')(accountSID, authToken);

client.messages.create({
    to: customer, //make sure to declare the form entry body here to test the text capability 
    from: '12038067699',
    body: 'Your order will be ready in ' + timeToPickup + 'minutes. See you soon!'
})
.then((message) => console.log(message.sid));