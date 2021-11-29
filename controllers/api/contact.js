const Contact = require('../../models/Contact');

module.exports = {
    create
}

async function create(req, res) {
    // 1. Create a post in the database (the data will be incoming via `req.body`)
    // 2. use res.json() to send a response to the frontend
    await Contact.create({content: req.body.content})
    // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
    res.status(200).json('ok')
}