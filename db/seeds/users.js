exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Salsa'}),
        knex('users').insert({id: 2, name: 'Pizza'}),
        knex('users').insert({id: 3, name: 'Green Onions'})
      ]);
    });
};
