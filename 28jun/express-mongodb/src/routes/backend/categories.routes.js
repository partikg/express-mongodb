const express = require('express');
const { create, view } = require('../../controllers/backend/categories.controller');
const server = express.Router();
const category = require('../../controllers/backend/categories.controller')

module.exports = app => {


    server.post('/add', create)

    server.get('/view', view)

    server.put('/update', category.update)

    server.delete('/delete/:id', category.delete)

    app.use('/api/backend/categories', server);
}