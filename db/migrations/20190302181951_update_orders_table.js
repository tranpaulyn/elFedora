
exports.up = function(knex, Promise) {
    return knex.schema.table('orders', function (table) {
      table.decimal('phoneNumber');
      table.decimal('totalPrice');
    });
  };
  
  exports.down = function(knex, Promise) {
    table.dropColumn('phoneNumber');
    table.dropColumn('totalPrice');
  };
  