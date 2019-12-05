const incomeHandler = new IncomeHandler(window.location.origin);

window.onload = () => {
  updateButtons();
};

document.getElementById('create-new-income').addEventListener('submit', function(event) {
  event.preventDefault();
  let idUser = '';
  let idCliente = '';
  let option = document.querySelector("select[name=clients]").selectedIndex;
  let client = document.querySelectorAll('select[name=clients]>option')[option].text;
  let amount = document.querySelector("input[name=amount]").value;
  let valueUnit = document.querySelector('input[name=valueUnit]').value;
  let valueUnitformat = parseFloat(valueUnit).toLocaleString('pt-BT', {style: 'currency', currency: 'BRL'});
  let valueTotal = document.querySelector("#valueTotal>strong").textContent;
  let formPGTO = document.querySelector("input[name=formPGTO]").value;
  let maturity = document.querySelector("input[name=maturity]").value;
  let maturityFormat = maturity.split('-').reverse().join('/');
  let description = document.querySelector("input[name=description]").value;
  let category = document.querySelector("input[name=category]").value;
  let invoice = document.querySelector("input[name=invoice]").value;

  if(option === "" || client === "" || amount === "" || valueUnit === "" || valueTotal === "" || formPGTO === "" || maturity === ""
  || description === "" || category === "" || invoice == ""){
    message("Campos não podem estar vazios, verificar!");
    return;
  };

  incomeHandler.createIncome(idUser, idCliente, client, amount, valueUnit, valueTotal, formPGTO, maturity, maturityFormat, description, category, invoice)
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
    let amount = event.target.parentElement.querySelector("input[name=amount]").value;
    let valueUnit = event.target.value;
    let valueTotal = event.target.parentElement.querySelector("#valueTotal>strong");
    let acount = parseFloat(amount * valueUnit);
    let acountFormat = acount.toLocaleString('pt-BT', {style: 'currency', currency: 'BRL'});
    valueTotal.innerText = acountFormat;
};

function message(message){
  let divParent = document.querySelector('.message-container');
      divParent.innerHTML = '';
  let divMessage = document.createElement('div');
      divMessage.innerText = `Status: ${message}`;
      divParent.appendChild(divMessage);  
}

function addIncomeDom(result){
  let divTitle = document.querySelector('#income-List>h3');
  
  if(divTitle.textContent === "Não possui nenhuma entrada"){
    divTitle.textContent = "Lista de entradas";
  }

  let divParent = document.querySelector('#income-List');

  let divIncome = document.createElement('div')
      divIncome.id = 'income';
      divIncome.innerHTML = `
      <div>Cliente: ${result.nameClient}</div>
      <div>Quantidade: ${result.amount}</div>
      <div>Valor Unitario: ${result.valueUnit}</div>
      <div>Valor Total: ${result.valueTotal}</div>
      <div>Forma de Pagamento: ${result.formPGTO}</div>
      <div>Vencimento: ${result.maturityFormat}</div>
      <div>Categoria: ${result.category}</div>
      <div>Descrição: ${result.description}</div>
      <div>Visualizar: ${result.invoice}</div>
      <button class="btn-delete" name="${result._id}">Excluir</button>
      <button class="btn-edit" name="${result._id}">Editar</button>
      <hr></hr>`
      divParent.appendChild(divIncome);
  updateButtons();
}

function delet(event){
    let idIncome = event.srcElement.name;
    incomeHandler.deleteIncome(idIncome)
    .then((succes)=>{
        message(`Deletado com sucesso!`)
        event.target.parentElement.remove();
    })
    .catch((err)=>{
        message(`Erro ao deletar, verificar ${err}`);
    });
}

function edit(event){
  let idIncome = event.srcElement.name;
  incomeHandler.findOneRegisterIncome(idIncome)
  .then((result)=>{
    event.target.parentElement.remove();
    let divParent = document.querySelector('#income-List');
    let divEdit = document.createElement('div')
        divEdit.id = 'income';
        divEdit.innerHTML = `
        <label>Cliente: </label>
        <select name="clients" id="">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        </select>
        <label >Quantidade:</label>
        <input type="number" name="amount" value="${result.data.amount}" step="any" title="Adicionar quantidade, Não utilizar virgula somente ponto!">
        <label >Valor unitario R$:</label>
        <input class="valueUnit" type="number" name="valueUnit" value="${result.data.valueUnit}" step="any" title="Adicionar valor unitario, Não utilizar virgula somente ponto!">
        <label id="valueTotal"> Valor total:<strong> ${result.data.valueTotal} </strong></label>
        <label>Forma de Pagamento:</label>
        <input type="text" name="formPGTO" value="${result.data.formPGTO}">
        <label>Vencimento:</label>
        <input type="date" name="maturity" value="${result.data.maturity}">
        <label>Descrição:</label>
        <input type="text" name="description" value="${result.data.description}">
        <label>Categoria:</label>
        <input type="text" name="category" value="${result.data.category}">
        <label>Nota fiscal:</label>
        <input type="file" name="invoice" value="${result.data.invoice}">
        <button class="btn-update" name="${result.data._id}">Salvar</button>
        <button class="btn-cancel" name="${result.data._id}">Cancelar</button>
        <hr></hr>
        `
      divParent.appendChild(divEdit);
      updateButtons();
  })
}

function cancel(event){
  let idIncome = event.srcElement.name;
  incomeHandler.findOneRegisterIncome(idIncome)
  .then((result)=>{
    event.target.parentElement.remove();
    let divParent = document.querySelector('#income-List');

    let divIncome = document.createElement('div')
        divIncome.id = 'income';
        divIncome.innerHTML = `
        <div>Cliente: ${result.data.nameClient}</div>
        <div>Quantidade: ${result.data.amount}</div>
        <div>Valor Unitario: ${result.data.valueUnit}</div>
        <div>Valor Total: ${result.data.valueTotal}</div>
        <div>Forma de Pagamento: ${result.data.formPGTO}</div>
        <div>Vencimento: ${result.data.maturityFormat}</div>
        <div>Categoria: ${result.data.category}</div>
        <div>Descrição: ${result.data.description}</div>
        <div>Visualizar: ${result.data.invoice}</div>
        <button class="btn-delete" name="${result.data._id}">Excluir</button>
        <button class="btn-edit" name="${result.data._id}">Editar</button>
        <hr></hr>`
        divParent.appendChild(divIncome);
        updateButtons();
  })
}

function updateBD(event){
  let idIncome = event.srcElement.name;
  let option = event.target.parentElement.querySelector("select[name=clients]").selectedIndex;
  let client = event.target.parentElement.querySelectorAll('select[name=clients]>option')[option].text;
  let amount = event.target.parentElement.querySelector("input[name=amount]").value;
  let valueUnit = event.target.parentElement.querySelector('input[name=valueUnit]').value;
  let valueUnitformat = parseFloat(valueUnit).toLocaleString('pt-BT', {style: 'currency', currency: 'BRL'});
  let valueTotal = event.target.parentElement.querySelector("#valueTotal>strong").textContent;
  let formPGTO = event.target.parentElement.querySelector("input[name=formPGTO]").value;
  let maturity = event.target.parentElement.querySelector("input[name=maturity]").value;
  let maturityFormat = maturity.split('-').reverse().join('/');
  let description = event.target.parentElement.querySelector("input[name=description]").value;
  let category = event.target.parentElement.querySelector("input[name=category]").value;
  let invoice = event.target.parentElement.querySelector("input[name=invoice]").value;
  incomeHandler.updateIncome(idIncome, client, amount, valueUnit, valueTotal, formPGTO, maturity,
   maturityFormat, description, category, invoice)
   .then((succes)=>{
      event.target.parentElement.remove();
      addIncomeDom(succes.data);
   })
}

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
