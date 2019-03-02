
exports.up = function(knex, Promise) {
    return knex.schema.table('orders', function (table) {
        table.bigint('phoneNumber')
    });
  };
  
  exports.down = function(knex, Promise) {
    return Promise.resolve();
  };
  