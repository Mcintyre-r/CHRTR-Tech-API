const db = require('../../../data/dbConfig')


module.exports = {
    getOrders,
    addOrder,
    updateOrder,
    deleteOrder
}

function getOrders(){
    return db('orders')
}

function addOrder(order){
    return db('orders')
        .insert(order, 'id')
}

function updateOrder(order){
    return db('orders')
        .where('id', order.id)
        .update(order, 'id')
}


function deleteOrder(id){
    return db('orders')
        .where('id', id)
        .delete()
}
