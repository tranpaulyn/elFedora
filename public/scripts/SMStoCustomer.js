const accountSID = 'AC7f3db307d36d68f2c4a2640ed2ece741'
const authToken = '46978b40e2a2d8c35f92bc624ffab50b'

const client = require('twilio')(accountSID, authToken);

client.messages.create({
    to: customer, //make sure to declare the form entry body here to test the text capability 
    from: '12038067699',
    body: 'Your order will be ready in ' + timeToPickup + 'minutes. See you soon!'
})
.then((message) => console.log(message.sid));