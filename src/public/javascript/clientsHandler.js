const clientHandler = new ClientHandler('http://localhost:4000');

window.addEventListener('load', () => {

})

let form = document.getElementById('create-new-client');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let name = document.getElementById('clientName').value;
  let email = document.getElementById('clientEmail').value;
  let tellphone = document.getElementById('clientTellphone').value;

  clientHandler.createCLient(name, email, tellphone)

  form.reset();
})

function myClick(element, operation) {
  let parent = element.parentNode;
  //Div com os dados do cliente
  let beforedelete = parent.parentNode;
  //Div que contem tudo do cliente
  let toDelete = beforedelete.parentNode;
  console.log(beforedelete)
  // console.log(parent.getElementsByTagName('div'));
  let name_div = beforedelete.childNodes[1];
  let name = beforedelete.childNodes[1].innerText;
  let email_div = beforedelete.childNodes[3];
  let email = beforedelete.childNodes[3].innerText;
  let telefone_div = beforedelete.childNodes[5];
  let telefone = beforedelete.childNodes[5].innerText;
  console.log(beforedelete)
  console.log(name)
  console.log(email)
  console.log(telefone)
  if (operation === "deletar" && parent.className === "buttons") {
    clientHandler.deleteClient(name, email, telefone);
    beforedelete.remove();
  }
  else if (operation = "update" && parent.className === "buttons") {
    console.log('vai', beforedelete);
    console.log('vai', beforedelete.childNodes[1].innerHTML);
    name_div.innerHTML = `<input type="text" id="name_text" value="${name}">`;
    email_div.innerHTML = `<input type="text" id="email_text" value="${email}">`;
    telefone_div.innerHTML = `<input type="text" id="tell_text" value="${telefone}">`;
    console.log(parent);
    console.log('edit', parent.childNodes[1]);
    let edit = parent.childNodes[1];
    let salvar = parent.childNodes[3];
    salvar.classList.toggle("hide");
    edit.classList.toggle("hide");
  }
}

function save(element) {
  let parent = element.parentNode;
  //Div com os dados do cliente
  let data = parent.parentNode;
  //Div que contem tudo do cliente
  let toDelete = data.parentNode;
  console.log('dados', data);

  let name_div = data.childNodes[1];
  let email_div = data.childNodes[3];
  let telefone_div = data.childNodes[5];
  console.log('nameDiv', name_div);

  let name = data.childNodes[1].childNodes[0].value;
  let email = data.childNodes[3].childNodes[0].value;
  let telefone = data.childNodes[5].childNodes[0].value;
  console.log('nome', email);

  let edit = parent.childNodes[1];
  let save = parent.childNodes[3];
  console.log('parent',parent)
  console.log('parent',parent.childNodes)
  if (edit.classList.value === 'hide') {
    edit.classList.toggle("hide");
    save.classList.toggle("hide");
  }
  console.log('d', name_div.childNodes[0])
  // let name_dive = `<a class="clientName">${name}</a>`;
  // name_div.insertAdjacentHTML("beforeend" , name_dive);

  clientHandler.updateCLient(name, email, telefone);

  name_div.innerHTML = `<a class="clientName">${name}</a>`;
  email_div.innerHTML = `<a class="clientName">${email}</a>`;
  telefone_div.innerHTML = `<a class="clientName">${telefone}</a>`;


}