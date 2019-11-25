const clientHandler = new ClientHandler('http://localhost:4000');

window.addEventListener('load', () => {
  
})



let form = document.getElementById('create-new-client');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('clientName').value;
  let email = document.getElementById('clientEmail').value;
  let tellphone = document.getElementById('clientTellphone').value;

  clientHandler.createCLient(name,email,tellphone)

  form.reset();
})