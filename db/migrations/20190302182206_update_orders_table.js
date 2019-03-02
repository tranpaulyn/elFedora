
exports.up = function(knex, Promise) {
    return knex.schema.table('orders', function (table) {
        table.dropColumn('phoneNumber');
        table.dropColumn('totalPrice');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
  };
  