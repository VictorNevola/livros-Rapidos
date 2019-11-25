const incomeHandler = new IncomeHandler('http://localhost:3000');

window.onload = () => {
    let valueUnit = document.querySelector('input[name=valueUnit]');
        valueUnit.onchange = totalPrice;
};

document.getElementById('create-new-income').addEventListener('submit', function(event) {
  event.preventDefault();
  createIncomeDataBase();

});

function totalPrice() {
    let amount = document.querySelector("input[name=amount]").value;
    let valueUnit = document.querySelector('input[name=valueUnit]').value;
    let valueTotal = document.querySelector("#valueTotal>strong");
    let acount = parseFloat(amount * valueUnit);
    valueTotal.innerText = acount;
};

function createIncomeDataBase() {
  let idUser = '0';
  let idCliente = '1';
  let option = document.querySelector("select[name=clients]").selectedIndex;
  let client = document.querySelectorAll('select[name=clients]>option')[option].text;
  let amount = document.querySelector("input[name=amount]").value;
  let valueUnit = document.querySelector('input[name=valueUnit]').value;
  let valueTotal = document.querySelector("#valueTotal>strong").textContent;
  let formPGTO = document.querySelector("input[name=formPGTO]").value;
  let maturity = document.querySelector("input[name=maturity]").value;
  let description = document.querySelector("input[name=description]").value;
  let category = document.querySelector("input[name=category]").value;
  let invoice = document.querySelector("input[name=invoice]").value;

  incomeHandler.createIncome(idUser, idCliente, client, amount, valueUnit, valueTotal, formPGTO, maturity, description, category, invoice)
  .then((result)=>{
    Response(result);
  })
  document.getElementById('create-new-income').reset();
  document.querySelector("#valueTotal>strong").textContent = "";

}

function error(error){
  let divParent = document.querySelector('.message-container');
      divParent.innerHTML = '';
  let divError = document.createElement('div');
      divError.innerText = `Error: ${error}`;
      divParent.appendChild(divError);  
}