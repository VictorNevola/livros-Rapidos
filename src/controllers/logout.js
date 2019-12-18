const logout = (request, response) => {
    request.session.destroy((succes) => {
        response.redirect('/login');
      });
}


module.exports = logout;