
exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', function (table) {
      table.increments();
      table.string('customerName');
      table.decimal('phoneNumber');
      table.decimal('totalPrice');
      table.date('orderTime');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
  };
  