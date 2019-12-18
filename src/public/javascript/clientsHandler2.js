const clientHandler = new ClientHandler('http://localhost:4000');

let data1;

window.addEventListener('load', () => {
  clientHandler.getDataClients()
    .then(resposta => {
      let datas = [];
      let values = [];
      let sorted = resposta.data.sort(function (a, b) {
        if (a._id > b._id) {
          return 1;
        }
        if (a._id < b._id) {
          return -1;
        }
        return 0;
      });
      for (let i = 0; i < sorted.length; i += 1) {
        if (sorted[i]._id === null) {
          datas.push(sorted[i]._id);
        } else {
          datas.push(sorted[i]._id.slice(0, 10));
        }
        values.push(sorted[i].count);
      };
      new Chart(document.getElementById("line-chart2"), {
        type: 'line',
        data: {
          labels: datas,
          datasets: [{
            data: values,
            label: "Clients",
            borderColor: "black",
            fill: false
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Clientes'
          }
        }
      });
    })
    .catch(erro => {
      console.log(erro);
    })
  clientHandler.getData()
    .then(resp => {
      let datas = [];
      let values = [];
      let sorted = resp.data.sort(function (a, b) {
        if (a._id > b._id) {
          return 1;
        }
        if (a._id < b._id) {
          return -1;
        }
        return 0;
      });
      for (let i = 0; i < sorted.length; i += 1) {
        datas.push(sorted[i]._id);
        values.push(sorted[i].count);
      };
      new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: datas,
          datasets: [{
            data: values,
            label: "Receita",
            borderColor: "#3e95cd",
            fill: false
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Receitas por vencimento'
          }
        }
      })
    })
    .catch(error => {
      console.log(error)
    })
  clientHandler.getDataIncome()
    .then(rep => {
      let datas = [];
      let values = [];
      let sorted = rep.data.sort(function (a, b) {
        if (a._id > b._id) {
          return 1;
        }
        if (a._id < b._id) {
          return -1;
        }
        return 0;
      });
      for (let i = 0; i < sorted.length; i += 1) {
        datas.push(sorted[i]._id);
        values.push(sorted[i].soma);
      };
      new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
          labels: datas,
          datasets: [{
            label: "R$",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: values
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Lucro'
          }
        }
      });
    })
    .catch(er => {
      console.log(er);
    })
  clientHandler.getDataIncomeClient()
    .then(resp => {
      console.log(resp.data);
      let datas = [];
      let values = [];
      let sorted = resp.data.sort(function (a, b) {
        if (a._id > b._id) {
          return 1;
        }
        if (a._id < b._id) {
          return -1;
        }
        return 0;
      });
      for (let i = 0; i < sorted.length; i += 1) {
        datas.push(sorted[i]._id);
        values.push(sorted[i].soma);
      };
      new Chart(document.getElementById("bar-chart1"), {
        type: 'bar',
        data: {
          labels: datas,
          datasets: [
            {
              label: "R$",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
              data: values
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Receita por cliente'
          }
        }
      });
    })
    .catch(error => {
      console.log(error);
    })

    clientHandler.getData2()
    .then(resp => {
      let datas = [];
      let values = [];
      let sorted = resp.data.sort(function (a, b) {
        if (a._id > b._id) {
          return 1;
        }
        if (a._id < b._id) {
          return -1;
        }
        return 0;
      });
      for (let i = 0; i < sorted.length; i += 1) {
        datas.push(sorted[i]._id);
        values.push(sorted[i].count);
      };
      new Chart(document.getElementById("line-chart3"), {
        type: 'line',
        data: {
          labels: datas,
          datasets: [{
            data: values,
            label: "Despesas",
            borderColor: "#3e95cd",
            fill: false
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Despesas'
          }
        }
      })
    })
    .catch(error => {
      console.log(error)
    })
    clientHandler.getDataExpensePerClient()
    .then(resp => {
      console.log(resp.data);
      let datas = [];
      let values = [];
      let sorted = resp.data.sort(function (a, b) {
        if (a._id > b._id) {
          return 1;
        }
        if (a._id < b._id) {
          return -1;
        }
        return 0;
      });
      for (let i = 0; i < sorted.length; i += 1) {
        datas.push(sorted[i]._id);
        values.push(sorted[i].soma);
      };
      new Chart(document.getElementById("bar-chart2"), {
        type: 'bar',
        data: {
          labels: datas,
          datasets: [
            {
              label: "R$",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
              data: values
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Despesa por cliente'
          }
        }
      });
    })
    .catch(error => {
      console.log(error);
    })
})