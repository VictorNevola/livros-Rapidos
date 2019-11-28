const incomeHandler = new IncomeHandler(window.location.origin);

window.onload = () => {
    let valueUnit = document.querySelector('input[name=valueUnit]');
        valueUnit.onchange = totalPrice;
};

document.getElementById('create-new-income').addEventListener('submit', function(event) {
  event.preventDefault();
  let idUser = '0';
  let idCliente = '1';
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

  let divClient = document.createElement('div');
      divClient.innerText = `Cliente: ${result.nameClient}`;
      divParent.appendChild(divClient);

  let divAmount = document.createElement('div');
      divAmount.innerText = `Quantidade: ${result.amount}`;
      divParent.appendChild(divAmount);
  
  let divValueUnit = document.createElement('div');
      divValueUnit.innerText = `Valor unitario: ${result.valueUnit}`;
      divParent.appendChild(divValueUnit);

  let divValueTotal = document.createElement('div');
      divValueTotal.innerText = `Valor Total: ${result.valueTotal}`;
      divParent.appendChild(divValueTotal);

  let divFormPGTO = document.createElement('div');
      divFormPGTO.innerText = `Forma de Pagamento: ${result.formPGTO}`;
      divParent.appendChild(divFormPGTO);

  let divMaturity = document.createElement('div');
      divMaturity.innerText = `Vencimento: ${result.maturity}`;
      divParent.appendChild(divMaturity);

  let divCategory = document.createElement('div');
      divCategory.innerText = `Categoria: ${result.category}`;
      divParent.appendChild(divCategory);
  
  let divDescription = document.createElement('div');
      divDescription.innerText = `Descrição: ${result.description}`;
      divParent.appendChild(divDescription);
  
  let divInvoice = document.createElement('div');
      divInvoice.innerText = `Visualizar nota fiscal: ${result.invoice}`;
      divParent.appendChild(divInvoice);
  
  let hr = document.createElement('hr');
      divParent.appendChild(hr);
}