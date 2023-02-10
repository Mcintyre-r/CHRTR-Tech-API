
exports.up = function(knex) {
    return knex.schema
    .createTable('orders',tbl=>{
        tbl.increments()
        tbl.string('orderId')
            .notNullable()
        tbl.float('amount', 2 )
            .notNullable()
        tbl.integer('reward points')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders')
};
