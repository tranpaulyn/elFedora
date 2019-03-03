
exports.up = function(knex, Promise) {
    return knex.schema.createTable('menu', function (table) {
        table.increments();
        table.string('name');
        table.decimal('price');
        table.string('description');
        table.string('category');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menu');
};
