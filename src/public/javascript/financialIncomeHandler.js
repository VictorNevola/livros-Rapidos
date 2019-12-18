const incomeHandler = new IncomeHandler(window.location.origin);

window.onload = () => {
  updateButtons();
};

document.getElementById('create-new-income').addEventListener('submit', function (event) {
  event.preventDefault();
  let idUser = '';
  let option = document.querySelector("select[name=clients]").selectedIndex;
  let idCliente = document.querySelectorAll('select[name=clients]>option')[option].value;
  let client = document.querySelectorAll('select[name=clients]>option')[option].text;
  let amount = document.querySelector("input[name=amount]").value;
  let valueUnit = document.querySelector('input[name=valueUnit]').value;
  let valueUnitformat = parseFloat(valueUnit).toLocaleString('pt-BT', { style: 'currency', currency: 'BRL' });
  let valueTotal = document.querySelector("#valueTotal>strong").textContent;
  let formPGTO = document.querySelector("input[name=formPGTO]").value;
  let maturity = document.querySelector("input[name=maturity]").value;
  let maturityFormat = maturity.split('-').reverse().join('/');
  let description = document.querySelector("input[name=description]").value;
  let category = document.querySelector("input[name=category]").value;
  
  if (option === "" || client === "" || amount === "" || valueUnit === "" || valueTotal === "" || formPGTO === "" || maturity === ""
    || description === "" || category === ""){
    message("Campos não podem estar vazios, verificar!");
    return;
  };

  valueTotal = valueTotal.slice(3, valueTotal.length);
    
   incomeHandler.createIncome(idUser, idCliente, client, amount, valueUnit, valueTotal, formPGTO, maturity, maturityFormat, description, category)
    .then((income)=>{
    addIncomeDom(income.data);
    document.getElementById('create-new-income').reset();
    document.querySelector("#valueTotal>strong").textContent = "R$ 0,00";
    message(`Inserido com Sucesso!`);
  })
  .catch((err)=>{
    message(`Não foi possivel incluir, verificar! ${err}`);
  })  
});

function totalPrice(event) {
    let amount = event.target.parentElement.parentElement.querySelector("input[name=amount]").value;
    let valueUnit = event.target.value;
    let valueTotal = event.target.parentElement.parentElement.querySelector("#valueTotal>strong");
    let acount = parseFloat(amount * valueUnit);
    let acountFormat = acount.toLocaleString('pt-BT', {style: 'currency', currency: 'BRL'});
    valueTotal.innerText = acountFormat;
};

function message(message) {
  let divParent = document.querySelector('.message-container');
  divParent.innerHTML = '';
  let divMessage = document.createElement('div');
  divMessage.innerText = `Status: ${message}`;
  divParent.appendChild(divMessage);
}

function addIncomeDom(result) {
  let divTitle = document.querySelector('#income-List>h3');

  if (divTitle.textContent === "Não possui nenhuma entrada") {
    divTitle.textContent = "Lista de entradas";
  }

  let divParent = document.querySelector('.list-container');
  let divIncome = document.createElement('div');
  divIncome.id = 'income';
  divIncome.innerHTML = `
      <div value="${result.idCliente}"><strong>Cliente: </strong>${result.nameClient}</div>
      <div><strong>Quantidade: </strong>${result.amount}</div>
      <div><strong>Valor Unitario: </strong>${result.valueUnit}</div>
      <div><strong>Valor Total: </strong>R$ ${result.valueTotal}</div>
      <div><strong>Forma de Pagamento: </strong>${result.formPGTO}</div>
      <div><strong>Vencimento: </strong>${result.maturityFormat}</div>
      <div><strong>Categoria: </strong>${result.category}</div>
      <div><strong>Descrição: </strong>${result.description}</div>
      <button class="btn-delete" name="${result._id}">Excluir</button>
      <button class="btn-edit" name="${result._id}">Editar</button>`
  divParent.appendChild(divIncome);
  updateButtons();
}

function delet(event) {
  let idIncome = event.srcElement.name;
  incomeHandler.deleteIncome(idIncome)
    .then((succes) => {
      message(`Deletado com sucesso!`)
      event.target.parentElement.remove();
    })
    .catch((err) => {
      message(`Erro ao deletar, verificar ${err}`);
    });
}

function edit(event){
  let optionSelect = event.target.parentElement.childNodes[1].getAttribute('value');
  let idIncome = event.srcElement.name;
  let parent = event.target.parentElement;
  let client = parent.childNodes[1];
      client.innerHTML = `<label> <strong>Cliente: </strong></label>
      <select name="clients" id="clients">
      </select>`
  let amount = parent.childNodes[3];
  let valueUnit = parent.childNodes[5];
  let valueTotal = parent.childNodes[7];
  let formPGTO = parent.childNodes[9];
  let maturity = parent.childNodes[11];
  let category = parent.childNodes[13];
  let description = parent.childNodes[15];
  let btnDelet = parent.childNodes[17];
  let btnEdit = parent.childNodes[19];

  incomeHandler.findOneRegisterIncome(idIncome)
  .then((result)=>{
    let clients = result.data.clients;
    let select = client.querySelector('select[name=clients]');
    clients.forEach(element => {
      let option = document.createElement('option');
          option.value = element._id;
          option.innerText = element.name;
          if(element._id === optionSelect){
            option.selected = true
          }
          select.appendChild(option);
    });

    amount.innerHTML = `<label> <strong>Quantidade: </strong></label>
    <input class="amount" type="number" name="amount" value="${result.data.succes.amount}" step="any" title="Adicionar quantidade, Não utilizar virgula somente ponto!">
    `
    valueUnit.innerHTML = `<label ><strong>Valor unitario: </strong>R$</label>
    <input class="valueUnit" type="number" name="valueUnit" value="${result.data.succes.valueUnit}" step="any" title="Adicionar valor unitario, Não utilizar virgula somente ponto!">
    `
    valueTotal.innerHTML = `<label id="valueTotal">Valor total: <strong> R$ ${result.data.succes.valueTotal} </strong> </label>`

    formPGTO.innerHTML = `<label><strong>Forma de PGTO: </strong></label>
    <input type="text" name="formPGTO" value="${result.data.succes.formPGTO}">
    `
    maturity.innerHTML = `<label><strong>Vencimento: </strong></label>
    <input type="date" name="maturity" value="${result.data.succes.maturity}">
    `
    category.innerHTML = `<label><strong>Categoria: </strong></label>
    <input type="text" name="category" value="${result.data.succes.category}">
    `
    description.innerHTML = `<label><strong>Descrição: </strong></label>
    <input type="text" name="description" value="${result.data.succes.description}">
    `
    btnDelet.classList.remove('btn-delete');
    btnDelet.classList.add('btn-update');
    btnDelet.name = result.data.succes._id;
    btnDelet.innerText = 'Salvar';

    btnEdit.classList.remove('btn-edit');
    btnEdit.classList.add('btn-cancel');
    btnEdit.name = result.data.succes._id;
    btnEdit.innerText = 'Cancelar';

    updateButtons();
  })
}

function cancel(event) {
  let idIncome = event.srcElement.name;
  let parent = event.target.parentElement;
  let client = parent.childNodes[1];
  let amount = parent.childNodes[3];
  let valueUnit = parent.childNodes[5];
  let valueTotal = parent.childNodes[7];
  let formPGTO = parent.childNodes[9];
  let maturity = parent.childNodes[11];
  let category = parent.childNodes[13];
  let description = parent.childNodes[15];
  let btnSave = parent.childNodes[17];
  let btnCancel = parent.childNodes[19];
  
  incomeHandler.findOneRegisterIncome(idIncome)
  .then((result)=>{
    client.innerHTML = `<div><strong>Cliente: </strong>${result.data.succes.nameClient}</div>`
    amount.innerHTML = `<div><strong>Quantidade: </strong>${result.data.succes.amount}</div>`
    valueUnit.innerHTML = `<div><strong>Valor unitario: </strong>R$ ${result.data.succes.valueUnit}</div>`
    valueTotal.innerHTML = `<div><strong>Valor total: </strong>R$ ${result.data.succes.valueTotal}`
    formPGTO.innerHTML = `<div><strong>Forma de PGTO: </strong>${result.data.succes.formPGTO}`
    maturity.innerHTML = `<div><strong>Vencimento: </strong>${result.data.succes.maturityFormat}`
    category.innerHTML = `<div><strong>Categoria: </strong>${result.data.succes.category}`
    description.innerHTML = `<div><strong>Descrição: </strong>${result.data.succes.description}`

    btnSave.classList.remove('btn-update');
    btnSave.classList.add('btn-delete');
    btnSave.name = result.data.succes._id;
    btnSave.innerText = 'Excluir';

    btnCancel.classList.remove('btn-cancel');
    btnCancel.classList.add('btn-edit');
    btnCancel.name = result.data.succes._id;
    btnCancel.innerText = 'Editar';

    updateButtons();
  })
}

function updateBD(event) {
  let idIncome = event.srcElement.name;
  let option = event.target.parentElement.querySelector("select[name=clients]").selectedIndex;
  let idClient = document.querySelectorAll('select[name=clients]>option')[option].value;
  let client = event.target.parentElement.querySelectorAll('select[name=clients]>option')[option].text;
  let amount = event.target.parentElement.querySelector("input[name=amount]").value;
  let valueUnit = event.target.parentElement.querySelector('input[name=valueUnit]').value;
  let valueUnitformat = parseFloat(valueUnit).toLocaleString('pt-BT', { style: 'currency', currency: 'BRL' });
  let valueTotal = event.target.parentElement.querySelector("#valueTotal>strong").textContent;
  let formPGTO = event.target.parentElement.querySelector("input[name=formPGTO]").value;
  let maturity = event.target.parentElement.querySelector("input[name=maturity]").value;
  let maturityFormat = maturity.split('-').reverse().join('/');
  let description = event.target.parentElement.querySelector("input[name=description]").value;
  let category = event.target.parentElement.querySelector("input[name=category]").value;
  
  valueTotal = valueTotal.slice(3, valueTotal.length);

  incomeHandler.updateIncome(idIncome, idClient, client, amount, valueUnit, valueTotal, formPGTO, maturity,
   maturityFormat, description, category)
   .then((succes)=>{
      event.target.parentElement.remove();
      addIncomeDom(succes.data);
    })
}

function updateButtons() {
  let valueUnit = document.getElementsByClassName('valueUnit');
  let deletButton = document.getElementsByClassName('btn-delete');
  let editButton = document.getElementsByClassName('btn-edit');
  let cancelButton = document.getElementsByClassName('btn-cancel');
  let updateButton = document.getElementsByClassName('btn-update');

  for (let i = 0; i < valueUnit.length; i += 1) {
    valueUnit[i].onchange = totalPrice;
  }

  for (let i = 0; i < deletButton.length; i += 1) {
    deletButton[i].onclick = delet;
  }

  for (let i = 0; i < editButton.length; i += 1) {
    editButton[i].onclick = edit;
  }

  for (let i = 0; i < cancelButton.length; i += 1) {
    cancelButton[i].onclick = cancel;
  }

  for (let i = 0; i < updateButton.length; i += 1) {
    updateButton[i].onclick = updateBD;
  }
}

const navSlide = () => {
  const burguer = document.querySelector('.burguer');
  const nav = document.querySelector('.ul-horizontal ');
  burguer.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })
}

navSlide();