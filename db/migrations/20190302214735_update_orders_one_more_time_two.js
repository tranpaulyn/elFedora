
exports.up = function(knex, Promise) {
    return knex.schema.table('orders', function (table) {
        table.timestamp('orderTime');
        table.integer('phoneNumber')
    });
  };
  
  exports.down = function(knex, Promise) {
    return Promise.resolve();
  };
  