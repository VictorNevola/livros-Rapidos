
class ClientHandler {
  constructor(baseUrl = "") {
    this.BASE_URL = baseUrl;
  }

  createCLient(name, email, tellphone) {
    const newClient = {
      name: name,
      email: email,
      tellphone: tellphone
    }

    axios.post('/save', newClient)
      .then(response => {
        console.log('foi', response);
      })
      .catch(error => {
        console.log('erro', error)
      })
  }
}



