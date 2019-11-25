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
      console.log(response.data.name);
      let i = document.querySelector('.clients-container');
      let d = createDiv(response.data.name, response.data.email, response.data.tellphone);
      i.insertAdjacentHTML("beforeend" , d);
      })
      .catch(error => {
        console.log('erro', error)
      })
  }
}

function createDiv(name, email, tellphone) {
  let newDiv = `
  <div class="clientName">Name: ${name}</div>
  <div class="clientEmail">Email: ${email}</div>
  <div class="clientTell">Telefone: ${tellphone}</div>
  `
  return newDiv;
}