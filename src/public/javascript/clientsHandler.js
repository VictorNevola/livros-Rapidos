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

let emailPesquise = '';

function myClick(element, operation) {
  let parent = element.parentNode;
  //Div com os dados do cliente
  let beforedelete = parent.parentNode;
  //Div que contem tudo do cliente
  let toDelete = beforedelete.parentNode;
  // console.log(parent.getElementsByTagName('div'));
  let name_div = beforedelete.childNodes[1];
  let name = beforedelete.childNodes[1].innerText;
  let email_div = beforedelete.childNodes[3];
  let email = beforedelete.childNodes[3].innerText;
  let telefone_div = beforedelete.childNodes[5];
  let telefone = beforedelete.childNodes[5].innerText;
  
  if (operation === "deletar" && parent.className === "buttons") {
    clientHandler.deleteClient(name, email, telefone);
    beforedelete.remove();
  }
  else if (operation = "update" && parent.className === "buttons") {
    emailPesquise = beforedelete.childNodes[3].innerText;
    name_div.innerHTML = `<input class="inputsChange" type="text" id="name_text" value="${name}">`;
    email_div.innerHTML = `<input class="inputsChange" type="text" id="email_text" value="${email}">`;
    telefone_div.innerHTML = `<input class="inputsChange" type="text" id="tell_text" value="${telefone}">`;
    let edit = parent.childNodes[1];
    let salvar = parent.childNodes[3];
    let cancel = parent.childNodes[5];
    salvar.classList.toggle("button");
    cancel.classList.toggle("button");
    salvar.classList.toggle("hide");
    cancel.classList.toggle("hide");
    edit.classList.toggle("hide");
  }
}

function save(element, order) {
  let parent = element.parentNode;
  //Div com os dados do cliente
  let data = parent.parentNode;
  //Div que contem tudo do cliente
  let toDelete = data.parentNode;

  let name_div = data.childNodes[1];
  let email_div = data.childNodes[3];
  let telefone_div = data.childNodes[5];

  let name = data.childNodes[1].childNodes[0].value;
  let email = data.childNodes[3].childNodes[0].value;
  let telefone = data.childNodes[5].childNodes[0].value;
  let edit = parent.childNodes[1];
  let save = parent.childNodes[3];
  let cancel = parent.childNodes[5];

  console.log(edit);
  console.log(save);
  if (edit.classList.value === 'hide') {
    edit.classList.toggle("hide");
    save.classList.toggle("hide");
  }
  // let name_dive = `<a class="clientName">${name}</a>`;
  // name_div.insertAdjacentHTML("beforeend" , name_dive);
  if (order === 'save') {
    clientHandler.updateCLient(emailPesquise, name, email, telefone);
  }

  name_div.innerHTML = `<a class="clientName inputsChange">${name}</a>`;
  email_div.innerHTML = `<a class="clientName inputsChange">${email}</a>`;
  telefone_div.innerHTML = `<a class="clientName inputsChange">${telefone}</a>`;

  save.classList.toggle("hide");
  edit.classList.toggle("hide");
  cancel.classList.toggle("hide");

}

function openMenu(menu) {
  let parent = menu.parentNode;
  let filho = parent.parentNode;
  let pai = filho.parentNode;
  // let img = document.getElementById('expand').src;
  // document.getElementById('expand').src = '../images/icon3.svg';
  // console.log(img);
  pai.classList.toggle('open');
}