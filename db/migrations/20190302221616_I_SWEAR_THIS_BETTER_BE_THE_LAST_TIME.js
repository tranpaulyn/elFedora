
exports.up = function(knex, Promise) {
    return knex.schema.table('orders', function (table) {
        table.dropColumn('orderTime');
    });
  };
  
  exports.down = function(knex, Promise) {
    return Promise.resolve();
  };
  