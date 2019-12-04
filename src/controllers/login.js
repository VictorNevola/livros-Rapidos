const login = (request, response) => {
    if(request.session.currentUser){
        response.render('ladingPage');
    }else {
        response.render('login');
    }
}

module.exports = login;