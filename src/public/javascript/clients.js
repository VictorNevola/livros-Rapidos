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
      let i = document.querySelector('#data-table');
      let d = createDiv(response.data.name, response.data.email, response.data.tellphone);
      i.insertAdjacentHTML("beforeend" , d);
      })
      .catch(error => {
        console.log('erro', error)
      })
  }
  
  deleteClient(name, email, tellphone){
    const client = { email: email}
    axios.post('/deleteClients', client)
    .then(resp => {
      console.log(resp);
    })
    .catch(erro => {
      console.log(erro);
    })
  }

  updateCLient(name, email, tellphone){
    const client = { 
      name: name,
      email: email,
      tellphone: tellphone};
    axios.post('/updateClients', client)
    .then(respo => {
      console.log(respo);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
}

function createDiv(name, email, tellphone) {
  let newDiv = `
  <tr>
  <td class="clientName" >${name}</td>
  <td class="clientName" >${email}</td>
  <td class="clientName" >${tellphone}</td>
  <td class="buttons">
    <input type="button" id="edit_button1" value="Edit" onclick="myClick(this, 'update')">
    <input type="button" id="save_button1" value="Save" class="hide" onclick="save(this)">
    <input type="button" value="Deletar"  onclick="myClick(this,'deletar')">
  </td>
</tr>
  `
  return newDiv;
}