
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('menu').insert({id: 1,  name: 'Chips and Salsa',        description:'Corn tortilla chips and escabeche',                                      price: 11.95, category: 'Tapas'}),
        knex('menu').insert({id: 2,  name: 'Ceviche',                description:'Fresh water cobbler ceviche',                                            price: 11.95, category: 'Tapas'}),
        knex('menu').insert({id: 3,  name: 'Chorizo & Baked Cheese', description:'Cheesey platter with chorizo',                                           price: 12.95, category: 'Tapas'}),
        knex('menu').insert({id: 4,  name: 'Chicken Flautas',        description:'Served with sour cream, picante sauce',                                  price: 10.95, category: 'Tapas'}),
        knex('menu').insert({id: 5,  name: 'Guacamole',              description:'Chips and fresh house made guacamole',                                   price: 12.95, category: 'Tapas'}),
        knex('menu').insert({id: 6,  name: 'Corn on the Cobb',        description:'Grilled street style corn on the cobb',                                  price: 7.95,  category: 'Tapas'}),
        knex('menu').insert({id: 7,  name: 'Nachos',        description:'Baked Nachos with all the fixings',                                      price: 16.95, category: 'Tapas'}),
        knex('menu').insert({id: 8,  name: 'Bean and cheese molletes',        description:'Toasted open faced toast',                                               price: 8.95,  category: 'Tapas'}),
        knex('menu').insert({id: 9,  name: 'Calamares',        description:'Crispy calamares with Adobo and Crema',                                  price: 14.95, category: 'Tapas'}),
        knex('menu').insert({id: 10, name: 'Prawns',        description:'Tequila Prawns and sals de mango',                                       price: 17.95, category: 'Tapas'}),
        knex('menu').insert({id: 11, name: 'Chicken Soup',        description:'Served with tortillas',                                                  price: 7.95,  category: 'Tapas'}),
        knex('menu').insert({id: 12, name: 'Hominy Bean & Pork Pozole',        description:"A taste of Mexico's soul",                                               price: 9.95,  category: 'Soups'}),
        knex('menu').insert({id: 13, name: 'House Salad',        description:'Avocado, tomato, housemade queso and balsamic',                          price: 14.95, category: 'Soups'}),
        knex('menu').insert({id: 14, name: 'Jicama Salad',        description:'Jicama, vinagrette, tajin and mango',                                    price: 10.95, category: 'Salad'}),
        knex('menu').insert({id: 15, name: 'Chicken',        description:'Served with corn tortilla, cheese and all the fixings',                  price: 16.95, category: 'Salad'}),
        knex('menu').insert({id: 16, name: 'Chorizo',        description:'Served with corn tortilla, cheese and all the fixings',                  price: 16.95, category: 'Quesadillas'}),
        knex('menu').insert({id: 17, name: 'Mushroom',        description:'Served with corn tortilla, cheese and all the fixings',                  price: 16.95, category: 'Quesadillas'}),
        knex('menu').insert({id: 18, name: 'Beef Barbacoa',        description:'Served with corn tortilla, cheese and all the fixings',                  price: 16.95, category: 'Quesadillas'}),
        knex('menu').insert({id: 19, name: 'Fish',        description:'Served on corn tortillas with salsa de magno',                           price: 18.95, category: 'Tacos'}),
        knex('menu').insert({id: 20, name: 'Carnitas',        description:'Served with corn tortillas with beans and corn',                         price: 16.95, category: 'Tacos'}),
        knex('menu').insert({id: 21, name: 'Mexican City',        description:'Served on fresh basked bolillo',                                         price: 14.95, category: 'Tacos'}),
        knex('menu').insert({id: 22, name: 'Poblano',        description:'With egg, cheese, and tomato sauce',                                     price: 14.95, category: 'Tortas'}),
        knex('menu').insert({id: 23, name: 'Pulled Pork',        description:'Wtih beans, avocado and fruit chutney',                                  price: 14.95, category: 'Tortas'}),
        knex('menu').insert({id: 24, name: 'Barbacoa',        description:'With mayonnaise, avocado, pickled onion and beans',                      price: 14.95, category: 'Tortas'}),
        knex('menu').insert({id: 25, name: 'Chicken',        description:'With mole and all the fixings',                                          price: 18.95, category: 'Tortas'}),
        knex('menu').insert({id: 26, name: 'Chorizo',        description:'With tomato sauce and all the fixings',                                  price: 18.95, category: 'Enchiladas'}),
        knex('menu').insert({id: 27, name: 'Beef',        description:'With salsa verde and all the fixings',                                   price: 18.95, category: 'Enchiladas'}),
        knex('menu').insert({id: 28, name: 'Chiles Rellenos',        description:'With bean salad, chicken enchilada mole, carnitas taco, rice and beans', price: 20.95, category: 'Enchiladas'}),
        knex('menu').insert({id: 29, name: 'Pork Loin',        description:'Slow roasted with chile verde, corn and rice',                           price: 23.95, category: 'Mains'}),
        knex('menu').insert({id: 30, name: 'Chicken Supreme',        description:'Roasted and served with mole',                                           price: 24.95, category: 'Mains'}),
        knex('menu').insert({id: 31, name: 'Red Snapper Al Pastor',        description:'With shrimp and julienne vegetables',                                    price: 22.95, category: 'Mains'}),
        knex('menu').insert({id: 32, name: 'Chilaquiles Verdes',        description:'With queso fresco, chicken and fried egg',                               price: 19.95, category: 'Mains'}),
        knex('menu').insert({id: 33, name: 'Braised Short Rib Fajita',        description:'Braised served with rice and beans',                                     price: 28.95, category: 'Mains'}),

      ]);
    });
};
