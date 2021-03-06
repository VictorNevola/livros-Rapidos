class IncomeHandler {

    constructor(baseUrl) {
      this.BASE_URL = baseUrl;
    }

    createIncome(idUser, idCliente, client, amount, valueUnit, valueTotal, formPGTO, maturity, maturityFormat, description, category) {
      const newIncome = {
        idUser: idUser,
        idCliente: idCliente,
        nameClient: client,
        amount:amount,
        valueUnit: valueUnit,
        valueTotal: valueTotal,
        formPGTO: formPGTO,
        maturity: maturity,
        maturityFormat: maturityFormat,
        description: description,
        category: category,
      };
      return axios.post(`${this.BASE_URL}/addIncomeBD`, newIncome);
    }

    deleteIncome(id){
      return axios.delete(`${this.BASE_URL}/deletIncomeBD/${id}`);
    }
    
    findOneRegisterIncome(id){
      return axios.get(`${this.BASE_URL}/findIncome/${id}`);
    }

    updateIncome(idIncome,idClient, client, amount, valueUnit, valueTotal, formPGTO, maturity,
      maturityFormat, description, category, invoice){
      const updateIncome = {
        incomeId: idIncome,
        idClient: idClient,
        nameClient: client,
        amount: amount,
        valueUnit: valueUnit,
        valueTotal: valueTotal,
        formPGTO: formPGTO,
        maturity: maturity,
        maturityFormat: maturityFormat,
        description: description,
        category: category,
        invoice: invoice,
      }
      return axios.patch(`${this.BASE_URL}/updateIncome`, updateIncome)
    }
  }