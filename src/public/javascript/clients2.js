class ClientHandler {
  constructor(baseUrl = "") {
    this.BASE_URL = baseUrl;
  }


  getData() {
    return axios.get('/chart');
  }

  getData2() {
    return axios.get('/chartL');
  }

  getDataClients() {
    return axios.get('/chart2');
    axios.get('/chart2')
      .then(resp => {
        console.log('Isso', resp);
        // return resp;
      })
      .catch(error => {
        console.log(error);
      })

  }

  getDataIncome() {
    return axios.get('/chart3');
  }

  getDataIncomeClient() {
    return axios.get('/chart4');
  }

  getDataExpensePerClient() {
    return axios.get('/chartE');
  }

  // createCLient(name, email, tellphone) {
  //   const newClient = {
  //     name: name,
  //     email: email,
  //     tellphone: tellphone
  //   }

  //   axios.post('/save', newClient)
  //     .then(response => {
  //       console.log(response.data.name);
  //       let i = document.querySelector('#data-table');
  //       let d = createDiv(response.data._id, response.data.name, response.data.email, response.data.tellphone);
  //       i.insertAdjacentHTML("beforeend", d);
  //     })
  //     .catch(error => {
  //       console.log('erro', error)
  //     })
  // }

  // deleteClient(name, email, tellphone) {
  //   const client = { email: email }
  //   axios.post('/deleteClients', client)
  //     .then(resp => {
  //       console.log(resp);
  //     })
  //     .catch(erro => {
  //       console.log(erro);
  //     })
  // }

  // // findIdClient(email){
  // //   const email = {email};
  // //   axios.post('/findClient', email)
  // //   .then(findResp =>{
  // //     console.log(findResp);
  // //   })
  // //   .catch(errResp =>{
  // //     console.log(errResp);
  // //   })

  // // }

  // updateCLient(emailP, name, email, tellphone) {
  //   const client = {
  //     emailP: emailP,
  //     name: name,
  //     email: email,
  //     tellphone: tellphone
  //   };
  //   axios.post('/updateClients', client)
  //     .then(respo => {
  //       console.log(respo);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
}


// let id = '';

// function createDiv(id, name, email, tellphone) {
//   let newDiv = `
//   <tr>
//   <td class="clientName inputs" id=${id} >${name}</td>
//   <td class="clientName inputs" >${email}</td>
//   <td class="clientName inputs" >${tellphone}</td>
//   <td class="buttons">
//   <input class="button" type="button" id="edit_button1" value="Edit" style="margin-right:10px"
//   onclick="myClick(this, 'update')">
//   <input type="button" id="save_button1" value="Save" class="hide" style="margin-right:10px"
//   onclick="save(this,'save')">
//   <input type="button" id="cancel_button1" value="Cancel" class="hide" style="margin-right:10px"
//   onclick="save(this,'cancel')">
//   <input class="button" type="button" value="Deletar" onclick="myClick(this,'deletar')">
//   <a value={{_id}} href="/detail/{{_id}}">Detalhes</a>
//   </td>
// </tr>
//   `
//   return newDiv;
// }

