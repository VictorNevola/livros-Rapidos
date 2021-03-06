const chartHandler = new ChartHandler('http://localhost:4000');

window.addEventListener('load', () => {
  chartHandler.getData
})


new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ['11/10/1500','1600',1700,1750,1800,1850,1900,1950,1999,2050,2060,2070],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478,50,100],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});