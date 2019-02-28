const accountSID = 'AC7f3db307d36d68f2c4a2640ed2ece741'
const authToken = '46978b40e2a2d8c35f92bc624ffab50b'

const client = require('twilio')(accountSID, authToken);

client.messages.create({
    to: '14037017111',
    from: '12038067699',
    body: 'You\'re an idiot'
})
.then((message) => console.log(message.sid));