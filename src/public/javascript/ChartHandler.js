class ChartHandler {
  constructor(baseUrl = "") {
    this.BASE_URL = baseUrl;
  }

  getData() {
    axios.get('/chart')
    .then(resp => {
      console.log('aqui',resp);
    })
    .catch(error => {
      console.log(error);
    })
  }  

}