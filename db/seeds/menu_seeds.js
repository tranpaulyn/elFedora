
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('menu').insert({id: 1,  foodName: 'Chips and Salsa',        description:'Corn tortilla chips and escabeche',                                      price: 11.95, category: 'Tapas'}),
        knex('menu').insert({id: 2,  foodName: 'Ceviche',                description:'Fresh water cobbler ceviche',                                            price: 11.95, category: 'Tapas'}),
        knex('menu').insert({id: 3,  foodName: 'Chorizo & Baked Cheese', description:'Cheesey platter with chorizo',                                           price: 12.95, category: 'Tapas'}),
        knex('menu').insert({id: 4,  foodName: 'Chicken Flautas',        description:'Served with sour cream, picante sauce',                                  price: 10.95, category: 'Tapas'}),
        knex('menu').insert({id: 5,  foodName: 'Guacamole',              description:'Chips and fresh house made guacamole',                                   price: 12.95, category: 'Tapas'}),
        knex('menu').insert({id: 6,  foodName: 'Corn on the Cobb',        description:'Grilled street style corn on the cobb',                                  price: 7.95,  category: 'Tapas'}),
        knex('menu').insert({id: 7,  foodName: 'Nachos',        description:'Baked Nachos with all the fixings',                                      price: 16.95, category: 'Tapas'}),
        knex('menu').insert({id: 8,  foodName: 'Bean and cheese molletes',        description:'Toasted open faced toast',                                               price: 8.95,  category: 'Tapas'}),
        knex('menu').insert({id: 9,  foodName: 'Calamares',        description:'Crispy calamares with Adobo and Crema',                                  price: 14.95, category: 'Tapas'}),
        knex('menu').insert({id: 10, foodName: 'Prawns',        description:'Tequila Prawns and sals de mango',                                       price: 17.95, category: 'Tapas'}),
        knex('menu').insert({id: 11, foodName: 'Chicken Soup',        description:'Served with tortillas',                                                  price: 7.95,  category: 'Tapas'}),
        knex('menu').insert({id: 12, foodName: 'Hominy Bean & Pork Pozole',        description:"A taste of Mexico's soul",                                               price: 9.95,  category: 'Soups'}),
        knex('menu').insert({id: 13, foodName: 'House Salad',        description:'Avocado, tomato, housemade queso and balsamic',                          price: 14.95, category: 'Soups'}),
        knex('menu').insert({id: 14, foodName: 'Jicama Salad',        description:'Jicama, vinagrette, tajin and mango',                                    price: 10.95, category: 'Salad'}),
        knex('menu').insert({id: 15, foodName: 'Chicken',        description:'Served with corn tortilla, cheese and all the fixings',                  price: 16.95, category: 'Salad'}),
        knex('menu').insert({id: 16, foodName: 'Chorizo',        description:'Served with corn tortilla, cheese and all the fixings',                  price: 16.95, category: 'Quesadillas'}),
        knex('menu').insert({id: 17, foodName: 'Mushroom',        description:'Served with corn tortilla, cheese and all the fixings',                  price: 16.95, category: 'Quesadillas'}),
        knex('menu').insert({id: 18, foodName: 'Beef Barbacoa',        description:'Served with corn tortilla, cheese and all the fixings',                  price: 16.95, category: 'Quesadillas'}),
        knex('menu').insert({id: 19, foodName: 'Fish',        description:'Served on corn tortillas with salsa de magno',                           price: 18.95, category: 'Tacos'}),
        knex('menu').insert({id: 20, foodName: 'Carnitas',        description:'Served with corn tortillas with beans and corn',                         price: 16.95, category: 'Tacos'}),
        knex('menu').insert({id: 21, foodName: 'Mexican City',        description:'Served on fresh basked bolillo',                                         price: 14.95, category: 'Tacos'}),
        knex('menu').insert({id: 22, foodName: 'Poblano',        description:'With egg, cheese, and tomato sauce',                                     price: 14.95, category: 'Tortas'}),
        knex('menu').insert({id: 23, foodName: 'Pulled Pork',        description:'Wtih beans, avocado and fruit chutney',                                  price: 14.95, category: 'Tortas'}),
        knex('menu').insert({id: 24, foodName: 'Barbacoa',        description:'With mayonnaise, avocado, pickled onion and beans',                      price: 14.95, category: 'Tortas'}),
        knex('menu').insert({id: 25, foodName: 'Chicken',        description:'With mole and all the fixings',                                          price: 18.95, category: 'Tortas'}),
        knex('menu').insert({id: 26, foodName: 'Chorizo',        description:'With tomato sauce and all the fixings',                                  price: 18.95, category: 'Enchiladas'}),
        knex('menu').insert({id: 27, foodName: 'Beef',        description:'With salsa verde and all the fixings',                                   price: 18.95, category: 'Enchiladas'}),
        knex('menu').insert({id: 28, foodName: 'Chiles Rellenos',        description:'With bean salad, chicken enchilada mole, carnitas taco, rice and beans', price: 20.95, category: 'Enchiladas'}),
        knex('menu').insert({id: 29, foodName: 'Pork Loin',        description:'Slow roasted with chile verde, corn and rice',                           price: 23.95, category: 'Mains'}),
        knex('menu').insert({id: 30, foodName: 'Chicken Supreme',        description:'Roasted and served with mole',                                           price: 24.95, category: 'Mains'}),
        knex('menu').insert({id: 31, foodName: 'Red Snapper Al Pastor',        description:'With shrimp and julienne vegetables',                                    price: 22.95, category: 'Mains'}),
        knex('menu').insert({id: 32, foodName: 'Chilaquiles Verdes',        description:'With queso fresco, chicken and fried egg',                               price: 19.95, category: 'Mains'}),
        knex('menu').insert({id: 33, foodName: 'Braised Short Rib Fajita',        description:'Braised served with rice and beans',                                     price: 28.95, category: 'Mains'}),

      ]);
    });
};
