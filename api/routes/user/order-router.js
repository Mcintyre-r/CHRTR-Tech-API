const server = require('express').Router();
const orders = require('./order-model.js')

server.get('/',  (req,res) => {
    orders.getOrders()
        .then( orders => {
            res.status(200).json(orders)
        })
        .catch(err => {
            console.log('error', err)
            res.status(400).json({ "error": err})
        })
})

server.post('/submit', (req,res) => {
    console.log(req.body)
    const order = {
        orderId: req.body.orderId,
        amount: req.body.amount,
        'reward points': req.body['reward points']
    }
    orders.addOrder(order)
        .then(res.status(200).json('success'))
        .catch(err => console.log(err))
})

server.delete('/delete', (req,res) => {
    console.log(req.body.id)
    orders.deleteOrder(req.body.id)
        .then(res.status(200).json('success'))
        .catch(err => console.log(err))
})




module.exports = server;