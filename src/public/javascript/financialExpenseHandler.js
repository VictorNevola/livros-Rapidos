const expenseHandler = new ExpenseHandler(window.location.origin);

window.onload = () => {
  updateButtons();
};

document.getElementById('create-new-expense').addEventListener('submit', (event)=>{
  event.preventDefault();
  let idUser = '';
  let option = document.querySelector("select[name=provider]").selectedIndex;
  let idProvider = document.querySelectorAll('select[name=provider]>option')[option].value;
  let nameProvider = document.querySelectorAll('select[name=provider]>option')[option].text;
  let amount = document.querySelector("input[name=amount]").value;
  let valueUnit = document.querySelector('input[name=valueUnit]').value;
  let valueUnitformat = parseFloat(valueUnit).toLocaleString('pt-BT', {style: 'currency', currency: 'BRL'});
  let valueTotal = document.querySelector("#valueTotal>strong").textContent;
  let formPGTO = document.querySelector("input[name=formPGTO]").value;
  let maturity = document.querySelector("input[name=maturity]").value;
  let maturityFormat = maturity.split('-').reverse().join('/');
  let description = document.querySelector("input[name=description]").value;
  let category = document.querySelector("input[name=category]").value;

  if(option === "" || nameProvider === "" || amount === "" || valueUnit === "" || valueTotal === "" || formPGTO === "" || maturity === ""
  || description === "" || category === ""){
    message("Campos não podem estar vazios, verificar!");
    return;
  };

  expenseHandler.createExpenses(idUser, idProvider, nameProvider, amount, valueUnit, valueTotal, formPGTO, maturity, maturityFormat, description, category)
  .then((expense)=>{
    addIncomeDom(expense.data)
    document.getElementById('create-new-expense').reset();
    document.querySelector("#valueTotal>strong").textContent = "R$ 0,00";
    message(`Inserido com Sucesso!`);
  })
  .catch((err)=>{
    message(`Não foi possivel incluir, verificar! ${err}`);
  });
})

function addIncomeDom(result){
  let divTitle = document.querySelector('#expense-List>h3');
  
  if(divTitle.textContent === "Não possui nenhuma entrada"){
    divTitle.textContent = "Lista de entradas";
  }

  let divParent = document.querySelector('#expense-List');

  let divIncome = document.createElement('div')
      divIncome.id = 'income';
      divIncome.innerHTML = `
      <div value="${result.idProvider}">Fornecedor: ${result.nameProvider}</div>
      <div>Quantidade: ${result.amount}</div>
      <div>Valor Unitario: ${result.valueUnit}</div>
      <div>Valor Total: ${result.valueTotal}</div>
      <div>Forma de Pagamento: ${result.formPGTO}</div>
      <div>Vencimento: ${result.maturityFormat}</div>
      <div>Categoria: ${result.category}</div>
      <div>Descrição: ${result.description}</div>
      <button class="btn-delete" name="${result._id}">Excluir</button>
      <button class="btn-edit" name="${result._id}">Editar</button>
      <hr></hr>`
      divParent.appendChild(divIncome);
  updateButtons();
}

function delet(event){
  expenseHandler.deletExpense(event.srcElement.name)
  .then((succes)=>{
      message(`Deletado com sucesso!`)
      event.target.parentElement.remove();
  })
  .catch((err)=>{
      message(`Erro ao deletar, verificar ${err}`);
  });
}

function edit(event){
  let optionSelect = event.target.parentElement.childNodes[1].getAttribute('value');
  let parent = event.target.parentElement;
  let provider = parent.childNodes[1];
      provider.innerHTML = `<label>Fornecedor: </label>
      <select name="provider" id="provider">
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

  expenseHandler.findOneRegisterExpense(event.srcElement.name)
  .then((result)=>{
    let clients = result.data.clients;
    let select = provider.querySelector('select[name=provider]');

    clients.forEach(element => {
        let option = document.createElement('option');
          option.value = element._id;
          option.innerText = element.name;
          if(element._id === optionSelect){
            option.selected = true
          }
          select.appendChild(option);
    });
    
    amount.innerHTML = `<label>Quantidade: </label>
    <input class="amount" type="number" name="amount" value="${result.data.succes.amount}" step="any" title="Adicionar quantidade, Não utilizar virgula somente ponto!">
    `
    valueUnit.innerHTML = `<label >Valor unitario R$:</label>
    <input class="valueUnit" type="number" name="valueUnit" value="${result.data.succes.valueUnit}" step="any" title="Adicionar valor unitario, Não utilizar virgula somente ponto!">
    `
    valueTotal.innerHTML = `<label id="valueTotal"> Valor total:<strong> ${result.data.succes.valueTotal} </strong></label>`

    formPGTO.innerHTML = `<label>Forma de Pagamento:</label>
    <input type="text" name="formPGTO" value="${result.data.succes.formPGTO}">
    `
    maturity.innerHTML = `<label>Vencimento:</label>
    <input type="date" name="maturity" value="${result.data.succes.maturity}">
    `
    category.innerHTML = `<label>Categoria:</label>
    <input type="text" name="category" value="${result.data.succes.category}">
    `
    description.innerHTML = `<label>Descrição:</label>
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

function cancel(event){
  let idIncome = event.srcElement.name;
  let parent = event.target.parentElement;
  let provider = parent.childNodes[1];
  let amount = parent.childNodes[3];
  let valueUnit = parent.childNodes[5];
  let valueTotal = parent.childNodes[7];
  let formPGTO = parent.childNodes[9];
  let maturity = parent.childNodes[11];
  let category = parent.childNodes[13];
  let description = parent.childNodes[15];
  let btnSave = parent.childNodes[17];
  let btnCancel = parent.childNodes[19];
  expenseHandler.findOneRegisterExpense(idIncome)
  .then((result)=>{
    provider.innerHTML = `<div>Fornecedor: ${result.data.succes.nameProvider}</div>`
    amount.innerHTML = `<div>Quantidade: ${result.data.succes.amount}</div>`
    valueUnit.innerHTML = `<div>Valor unitario:R$ ${result.data.succes.valueUnit}</div>`
    valueTotal.innerHTML = `<div> Valor total: ${result.data.succes.valueTotal}`
    formPGTO.innerHTML = `<div>Forma de Pagamento: ${result.data.succes.formPGTO}`
    maturity.innerHTML = `<div>Vencimento: ${result.data.succes.maturityFormat}`
    category.innerHTML = `<div>Categoria: ${result.data.succes.category}`
    description.innerHTML = `<div>Descrição: ${result.data.succes.description}`

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

function updateBD(event){
  let idExpense = event.srcElement.name;
  let option = event.target.parentElement.querySelector("select[name=provider]").selectedIndex;
  let idProvider = document.querySelectorAll('select[name=provider]>option')[option].value;
  let provider = event.target.parentElement.querySelectorAll('select[name=provider]>option')[option].text;
  let amount = event.target.parentElement.querySelector("input[name=amount]").value;
  let valueUnit = event.target.parentElement.querySelector('input[name=valueUnit]').value;
  let valueUnitformat = parseFloat(valueUnit).toLocaleString('pt-BT', {style: 'currency', currency: 'BRL'});
  let valueTotal = event.target.parentElement.querySelector("#valueTotal>strong").textContent;
  let formPGTO = event.target.parentElement.querySelector("input[name=formPGTO]").value;
  let maturity = event.target.parentElement.querySelector("input[name=maturity]").value;
  let maturityFormat = maturity.split('-').reverse().join('/');
  let description = event.target.parentElement.querySelector("input[name=description]").value;
  let category = event.target.parentElement.querySelector("input[name=category]").value;
  
  expenseHandler.updateExpense(idExpense, idProvider, provider, amount, valueUnit, valueTotal, formPGTO, maturity,
   maturityFormat, description, category)
   .then((succes)=>{
      event.target.parentElement.remove();
      addIncomeDom(succes.data);
   })
}

function message(message){
  let divParent = document.querySelector('.message-container');
      divParent.innerHTML = '';
  let divMessage = document.createElement('div');
      divMessage.innerText = `Status: ${message}`;
      divParent.appendChild(divMessage);  
}

function totalPrice(event) {
  let amount = event.target.parentElement.parentElement.querySelector("input[name=amount]").value;
  let valueUnit = event.target.value;
  let valueTotal = event.target.parentElement.parentElement.querySelector("#valueTotal>strong");
  let acount = parseFloat(amount * valueUnit);
  let acountFormat = acount.toLocaleString('pt-BT', {style: 'currency', currency: 'BRL'});
  valueTotal.innerText = acountFormat;
};

function updateButtons () {
    let valueUnit = document.getElementsByClassName('valueUnit');
    let deletButton = document.getElementsByClassName('btn-delete');
    let editButton = document.getElementsByClassName('btn-edit');
    let cancelButton = document.getElementsByClassName('btn-cancel');
    let updateButton = document.getElementsByClassName('btn-update');
  
    for(let i = 0; i<valueUnit.length; i+=1){
      valueUnit[i].onchange = totalPrice;
    }
  
    for(let i = 0; i<deletButton.length; i+=1){
      deletButton[i].onclick = delet;
    }
  
    for(let i = 0; i<editButton.length; i+=1){
      editButton[i].onclick = edit;
    }
  
    for(let i = 0; i<cancelButton.length; i+=1){
      cancelButton[i].onclick = cancel;
    }
  
    for(let i = 0; i<updateButton.length; i+=1){
      updateButton[i].onclick = updateBD;
    }
  }