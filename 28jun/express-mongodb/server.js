const express = require('express');
const server = express();
const dbconnection = require('./database')
var cors = require('cors')

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors())

server.get('/', (request, response) => {
    response.send('server working fine');
})

require('./src/routes/backend/categories.routes')(server);
require('./src/routes/backend/products.routes')(server);


server.listen('2000', () => {
    console.log('server working')
})