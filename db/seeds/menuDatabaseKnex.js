var specificMenu = process.argv[2];

var selectorId = `SELECT * FROM famous_people WHERE first_name='${specificName}';`;
var searchingMessage = "Searching...";

const knex = require('knex')({
    client: 'pg',
    connection: require('./settings')    
  })
knex('famous_people').where('first_name', specificName)
.then((response) => {
var founder = `Found ${response.length} person(s) by the name ${specificName}`

    console.log(searchingMessage)
    console.log(founder)
    response.forEach(function(person){
    var strDate = person.birthdate.toISOString().substring(0, 10);

    console.log(`- ${person.id}: ${person.first_name} ${person.last_name}, born ${strDate}`);
})
})
.catch((error) => {
    console.log(error)
})
