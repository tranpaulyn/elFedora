
exports.up = function(knex, Promise) {
    return knex.schema.table('orders', function (table) {
        table.dropColumn('orderTime');
        table.dropColumn('phoneNumber');
    });
  };
  
  exports.down = function(knex, Promise) {
    return Promise.resolve();
  };
  