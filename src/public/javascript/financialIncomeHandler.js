const incomeHandler = new IncomeHandler(window.location.origin);

window.onload = () => {
    let valueUnit = document.querySelector('input[name=valueUnit]');
        valueUnit.onchange = totalPrice;
    let deletButton = document.getElementsByClassName('btn-delete');

    for(let i = 0; i<deletButton.length; i+=1){
        deletButton[i].onclick = delet;
      }
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

  incomeHandler.createIncome(idUser, idCliente, client, amount, valueUnit, valueTotal, formPGTO, maturityFormat, description, category, invoice)
  .then((income)=>{
    addIncomeDom(income.data);
    document.getElementById('create-new-income').reset();
    document.querySelector("#valueTotal>strong").textContent = "";
    message(`Inserido com Sucesso!`);
  })
  .catch((err)=>{
    message(`Não foi possivel incluir, verificar! ${err}`);
  })  

});

function totalPrice() {
    let amount = document.querySelector("input[name=amount]").value;
    let valueUnit = document.querySelector('input[name=valueUnit]').value;
    let valueTotal = document.querySelector("#valueTotal>strong");
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
      <div>Vencimento: ${result.maturity}</div>
      <div>Categoria: ${result.category}</div>
      <div>Descrição: ${result.description}</div>
      <div>Visualizar: ${result.invoice}</div>
      <button class="btn-delete" name="${result._id}">Excluir</button>
      <hr></hr>`
      divParent.appendChild(divIncome);
  
  let deletButton = document.getElementsByClassName('btn-delete');
      for(let i = 0; i<deletButton.length; i+=1){
          deletButton[i].onclick = delet;
        }
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