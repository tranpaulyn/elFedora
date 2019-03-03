
exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', function (table) {
      table.increments();
      table.string('customerName');
      table.bigint('phoneNumber');
      table.decimal('totalPrice',10,2);
      table.time('orderTime').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
  };
  