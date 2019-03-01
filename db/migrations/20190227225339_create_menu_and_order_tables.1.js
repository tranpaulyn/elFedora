
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cart', function (table) {
        table.increments().primary();
        table.integer('order_id').unsigned().notNullable();
        table.integer('menu_id').unsigned().notNullable();
        table.integer('quantity');

        table.foreign('order_id').references('id').inTable('orders');
        table.foreign('menu_id').references('id').inTable('menu');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cart');
};
