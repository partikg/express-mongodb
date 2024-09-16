// console.log('hello');

const http = require('http');
const url = require("url");
const fs = require('fs');

const server = http.createServer((request, response) => {

    // console.log(request.url);
    // console.log(request.method);

    // to separate the url
    let separateurl = url.parse(request.url, true)
    // console.log(separateurl);


    if (separateurl.pathname == '/' && request.method == 'GET') {
        response.end('server working fine')
    }
    else if (separateurl.pathname == '/add-category' && request.method == 'GET') {

        // to get the data from url
        var obj = {
            id: separateurl.query.id,
            name: separateurl.query.name,
        }

        try {
            var categorydata = JSON.parse(fs.readFileSync("demo.json"));
        }
        catch (error) {
            categorydata = [];
        }

        categorydata.push({ obj });

        fs.writeFileSync("demo.json", JSON.stringify(categorydata));

        // fs.writeFileSync("demo.txt", "welcome");

        //this is just to print on browser
        var obj = {
            status: true,
            message: 'add category successfully',
            data: ''
        }
        response.end(JSON.stringify(obj));

    }
    else if (separateurl.pathname == '/view-category' && request.method == 'GET') {

        // let readdata=fs.readFileSync("demo.txt")
        // let readdata = fs.readFileSync("demo.json");
        // response.write(readdata);

        var categorydata = JSON.parse(fs.readFileSync("demo.json"));

        var obj = {
            status: true,
            message: 'category found successfully',
            data: categorydata
        }
        response.end(JSON.stringify(obj));
    }
    else if (separateurl.pathname == '/delete-category' && request.method == 'DELETE') {
        var obj = {
            status: true,
            message: 'delete category successfully',
            data: ''
        }
        response.end(JSON.stringify(obj));
    }
    else if (separateurl.pathname == '/update-category' && request.method == 'PUT') {
        var obj = {
            status: true,
            message: 'update category successfully',
            data: ''
        }
        response.end(JSON.stringify(obj));
    }
    else {
        response.end('alert server not working')
    }

    // var obj = {
    //     status: true,
    //     message: 'data found',
    //     data: 'hey hi hello'
    // }

    // response.end(JSON.stringify(obj));
})

server.listen(2001, () => {
    console.log(`Server working`);
});