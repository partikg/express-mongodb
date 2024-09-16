const express = require('express');
const { create, view } = require('../../controllers/backend/products.controller');
const server = express.Router();
const products = require('../../controllers/backend/products.controller')

module.exports = app => {


    server.post('/add', create)

    server.get('/view', view)

    server.get('/update', products.update)

    server.delete('/delete', products.delete)

    app.use('/api/backend/products', server);
}