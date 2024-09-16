const express = require('express');
const server = express();   //to execute executable function
const validation = require('./middleware');

server.get('/', (request, response) => {
    response.send('server working fine');
})

const route = express.Router();
route.use(validation);

server.post('/add-category', validation, (request, response) => {
    var data = {
        status: true,
        message: 'record created successfully',
        data: ''
    }
    response.send(data);
})

server.get('/view-category', validation, (request, response) => {
    {
        var data = {
            status: true,
            message: 'record found successfully',
            data: ''
        }
    }

    response.send(data);
})

route.get('/update-category', (request, response) => {
    var data = {
        status: true,
        message: 'record updated successfully',
        data: ''
    }
    response.send(data);
})

server.delete('/delete-category', (request, response) => {
    var data = {
        status: true,
        message: 'record deleted successfully',
        data: ''
    }
    response.send(data);
})

server.use('/', route);

server.listen('1122', () => {
    console.log('serveer working')
})