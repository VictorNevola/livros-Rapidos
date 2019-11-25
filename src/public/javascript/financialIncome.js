class IncomeHandler {

    constructor(baseUrl = "") {
      this.BASE_URL = baseUrl;
    }

    createIncome(idUser, idCliente, client, amount, valueUnit, valueTotal, formPGTO, maturity, description, category, invoice) {
      const newIncome = {
        idUser: idUser,
        idCliente: idCliente,
        nameClient: client,
        amount:amount,
        valueUnit: valueUnit,
        valueTotal: valueTotal,
        formPGTO: formPGTO,
        maturity: maturity,
        description: description,
        category: category,
        invoice: invoice,
      }
  
      return axios.post('/addIncomeBD', newIncome)

    }
  }