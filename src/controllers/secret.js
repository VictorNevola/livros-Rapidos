const secret = (request, response) => {
    response.send(request.session);
}

module.exports = secret;