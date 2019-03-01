
exports.up = function(knex, Promise) {
    return knex.schema.table('menu', function (table) {
        table.decimal('price', 10, 2);
        table.string('description');
        table.string('category');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menu');
};
