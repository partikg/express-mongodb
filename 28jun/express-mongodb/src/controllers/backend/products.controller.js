const dbconnection = require('../../../database');

exports.create = async (request, response) => {

    const db = await dbconnection();
    const product = db.collection('products');

    const obj = [
        {
            name: request.body.name,
            image: request.body.image,
        },
        {
            name: request.body.name,
            image: request.body.image,
        }
    ]


    // const result = await category.insertOne(obj);
    const result = await product.insertMany(obj);

    var data = {
        status: true,
        message: 'product record created successfully',
        data: result
    }
    response.send(data);
}

exports.view = async (request, response) => {

    const db = await dbconnection();
    const result = await db.collection('products').find().toArray();

    {
        var data = {
            status: true,
            message: 'product record found successfully',
            data: result
        }
    }

    response.send(data);
}

exports.update = (request, response) => {
    var data = {
        status: true,
        message: 'product record updated successfully',
        data: ''
    }
    response.send(data);
}

exports.delete = (request, response) => {
    {
        var data = {
            status: true,
            message: 'product record deleted successfully',
            data: ''
        }
        response.send(data);
    }
}

