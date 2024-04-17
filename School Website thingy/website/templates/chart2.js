const ctx = document.getElementById('doughnut');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


1111111111111111111111111111111111111




  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Analyzer</title>
  </head>
  <body>
  
  <h2>Analyzer</h2>
  <p>Data 1: <span id="data1"></span></p>
  <p>Data 2: <span id="data2"></span></p>
  <button onclick="calculate()">Calculate</button>
  <p id="result"></p>
  
  <script>
      document.getElementById('data1').textContent = localStorage.getItem('data1');
      document.getElementById('data2').textContent = localStorage.getItem('data2');
  
      function calculate() {
          var data1 = parseFloat(localStorage.getItem('data1'));
          var data2 = parseFloat(localStorage.getItem('data2'));
          
          if (!isNaN(data1) && !isNaN(data2)) {
              var result = data1 + data2;
              document.getElementById('result').textContent = "Result: " + result;
          } else {
              document.getElementById('result').textContent = "Invalid Data";
          }
      }
      
  </script>
  </body>
  </html>
  
  <div>
      <canvas id="myChart"></canvas>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <script>
      const ctx = document.getElementById('myChart');
    
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: result,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    </script>