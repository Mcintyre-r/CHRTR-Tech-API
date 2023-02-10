
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {orderId:'001',amount:249.99, 'reward points':348},
        {orderId:'002',amount:220.32, 'reward points':290},
        {orderId:'003',amount:174.99, 'reward points':198},
        {orderId:'004',amount:75.93, 'reward points':25},
      ]);
    });
};
