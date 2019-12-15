class ExpenseHandler {

    constructor(baseUrl) {
      this.BASE_URL = baseUrl;
    }

    createExpenses(idUser, idProvider, provider, amount, valueUnit, valueTotal, formPGTO, maturity, maturityFormat, description, category) {
      const newExpense = {
        idUser: idUser,
        idProvider: idProvider,
        nameProvider: provider,
        amount: amount,
        valueUnit: valueUnit,
        valueTotal: valueTotal,
        formPGTO: formPGTO,
        maturity: maturity,
        maturityFormat: maturityFormat,
        description: description,
        category: category,
      };
      return axios.post(`${this.BASE_URL}/addExpenseBD`, newExpense);
    }

    deletExpense(id){
      return axios.delete(`${this.BASE_URL}/deletexpenseBD/${id}`);
    }
    
    findOneRegisterExpense(id){
      return axios.get(`${this.BASE_URL}/findexpense/${id}`);
    }

    updateExpense(idExpense, provider, amount, valueUnit, valueTotal, formPGTO, maturity,
      maturityFormat, description, category, proofOfPayment){
      const updateExpense = {
        idExpense: idExpense,
        nameProvider: provider,
        amount: amount,
        valueUnit: valueUnit,
        valueTotal: valueTotal,
        formPGTO: formPGTO,
        maturity: maturity,
        maturityFormat: maturityFormat,
        description: description,
        category: category,
        proofOfPayment: proofOfPayment,
      }
      return axios.patch(`${this.BASE_URL}/updateExpense`, updateExpense)
    }
  }