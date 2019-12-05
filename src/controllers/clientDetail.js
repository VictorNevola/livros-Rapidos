// import { request } from "http";

const clientDetails = (request, response) => {
  let clientId = request.params.id
  console.log(clientId);
  response.render('detailClients');
}

module.exports = clientDetails;