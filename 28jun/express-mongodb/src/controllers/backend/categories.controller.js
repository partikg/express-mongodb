const dbconnection = require('../../../database');
const mongodb = require('mongodb');

exports.create = async (request, response) => {

    const db = await dbconnection();
    const category = db.collection('categories');

    // const obj = [
    //     {
    //         name: request.body.name,
    //         image: request.body.image,
    //     },
    //     {
    //         name: request.body.name,
    //         image: request.body.image,
    //     }
    // ]

    // const result = await category.insertOne(obj);
    // const result = await category.insertMany(obj);
    const result = await category.insertOne(request.body);

    var data = {
        status: true,
        message: 'record created successfully',
        data: request.body
    }
    response.send(data);
}

exports.view = async (request, response) => {

    const db = await dbconnection();

    // To get all records
    const result = await db.collection('categories').find().toArray();

    // to filter keys
    // const result = await db.collection('categories').find(
    //     {
    //         name: request.query.search,
    //         image: '2.jpg'
    //     }).toArray();

    // to filter particular key 
    // const result = await db.collection('categories').find(
    //     {},
    //     {
    //         projection: {
    //             name: false
    //         }
    //     }
    // ).toArray();

    // to get single record
    // const result = await db.collection('categories').findOne();

    // to get record by id 
    // const result = await db.collection('categories').findOne(
    //     {
    //         _id: new mongodb.ObjectId(request.query.id)
    //     }
    // );


    {
        var data = {
            status: true,
            message: 'record found successfully',
            data: result
        }
    }

    response.send(data);
}

exports.update = async (request, response) => {

    const db = await dbconnection();
    const result = await db.collection('categories').updateMany(
        {
            _id: new mongodb.ObjectId(request.body.id)
        },
        {
            $set: {
                name: request.body.name,
                image: request.body.image,
            }
        }
    )

    var data = {
        status: true,
        message: 'record updated successfully',
        data: result
    }
    response.send(data);
}

exports.delete = async (request, response) => {

    const db = await dbconnection();
    const result = await db.collection('categories').deleteMany(
        {
            _id: new mongodb.ObjectId(request.params.id)
        },
    )

    {
        var data = {
            status: true,
            message: 'record deleted successfully',
            data: result
        }
        response.send(data);
    }
}

