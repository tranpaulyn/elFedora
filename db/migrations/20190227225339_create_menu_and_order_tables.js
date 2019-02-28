
exports.up = function(knex, Promise) {
    return knex.schema.createTable('menu', function (table) {
        table.increments();
        table.string('name');
        table.decimal('price');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menu');
};
