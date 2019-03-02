
exports.up = function(knex, Promise) {
    return knex.schema.table('orders', function (table) {
      table.decimal('phoneNumber', 11,2);
      table.decimal('totalPrice',10,2);
    });
  };
  
  exports.down = function(knex, Promise) {
    table.dropColumn('phoneNumber');
    table.dropColumn('totalPrice');
  };
  