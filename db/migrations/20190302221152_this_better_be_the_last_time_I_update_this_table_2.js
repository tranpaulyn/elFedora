
exports.up = function(knex, Promise) {
    return knex.schema.table('orders', function (table) {
        table.time('orderTime');
    });
  };
  
  exports.down = function(knex, Promise) {
    return Promise.resolve();
  };
  