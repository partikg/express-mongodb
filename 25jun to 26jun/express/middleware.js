module.exports = (request, response, next) => {

    if (request.query.key == '') {
        var data = {
            status: false,
            message: 'record field missing',
            data: ''
        }
    } else if (request.query.key != 123456789) {
        var data = {
            status: false,
            message: 'invalid key',
            data: ''
        }
    } else {
        next();
    }
    response.send(data);
}