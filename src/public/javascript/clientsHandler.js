const clientHandler = new ClientHandler('http://localhost:3000');

window.addEventListener('load', () => {
  //listar todos os clientes
})

document.getElementById('create-new-client').addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('clientName').value;
  console.log(name);
  let email = document.getElementById('clientEmail').value;
  console.log(email);
  let tellphone = document.getElementById('clientTellphone').value;
  console.log(tellphone);

  clientHandler.createCLient(name,email,tellphone)
  // .then(response => {
  //   console.log('Handler foi',response)
  // })
  // .catch(error => {
  //   console.log('Handler erro',error)
  // })
})