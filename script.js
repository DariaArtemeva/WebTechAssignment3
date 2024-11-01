google.charts.load('current', {'packages':['bar', 'corechart']});
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);
      google.charts.setOnLoadCallback(drawChart3);
      google.charts.setOnLoadCallback(drawChart4);
      google.charts.setOnLoadCallback(drawChart5);
      google.charts.setOnLoadCallback(drawChart6);
      google.charts.setOnLoadCallback(drawChartmy);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'A', 'B', 'C', 'D', 'E', 'FX', 'FN'],
          ['2021/2022', 50, 42, 36, 18, 10, 0, 7],
          ['2020/2021', 55, 48, 26, 8, 5, 0, 2],
          ['2019/2020', 22, 36, 36, 35, 4, 3, 1],
          ['2018/2019', 23, 20, 14, 3, 1, 5, 2],
          ['2017/2018', 24, 31, 24, 10, 6, 5, 1],
          ['2016/2017', 14, 55, 45, 15, 2, 4, 0]
        ]);

        if (window.innerWidth > 1000) {
              
        var options = {
          orientation: 'horizontal' 
          
        };
      }
      else if(window.innerWidth < 1000) {
      
        var options = {
          orientation: 'vertical' ,
        };
        
      }
      // if (window.innerWidth < 700){
      //   column.style.length = "500px";
      // }
      
      
        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
      function drawChart1() {

        var data = google.visualization.arrayToDataTable([
          ['Grade', 'Amount'],
          ['A', 50],
          ['B', 42],
          ['C', 36],
          ['D', 18],
          ['E', 10],
          ['FX', 0],
          ['FN', 7]
        ]);

        var options = {
          title: '2021/2022'
        };

        var chart = new google.visualization.PieChart(document.getElementById('2021/2022'));

        chart.draw(data, options);
      }
      function drawChart2() {

        var data = google.visualization.arrayToDataTable([
          ['Grade', 'Amount'],
          ['A', 55],
          ['B', 48],
          ['C', 26],
          ['D', 8],
          ['E', 5],
          ['FX', 0],
          ['FN', 2]
        ]);

        var options = {
          title: '2020/2021'
        };

        var chart = new google.visualization.PieChart(document.getElementById('2020/2021'));

        chart.draw(data, options);
      }
      function drawChart3() {

        var data = google.visualization.arrayToDataTable([
          ['Grade', 'Amount'],
          ['A', 22],
          ['B', 36],
          ['C', 36],
          ['D', 35],
          ['E', 4],
          ['FX', 3],
          ['FN', 1]
        ]);

        var options = {
          title: '2019/2020'
        };

        var chart = new google.visualization.PieChart(document.getElementById('2019/2020'));

        chart.draw(data, options);
      }
      function drawChart4() {

        var data = google.visualization.arrayToDataTable([
          ['Grade', 'Amount'],
          ['A', 23],
          ['B', 20],
          ['C', 14],
          ['D', 3],
          ['E', 1],
          ['FX', 5],
          ['FN', 2]
        ]);

        var options = {
          title: '2018/2019'
        };

        var chart = new google.visualization.PieChart(document.getElementById('2018/2019'));

        chart.draw(data, options);
      }
      function drawChart5() {

        var data = google.visualization.arrayToDataTable([
          ['Grade', 'Amount'],
          ['A', 24],
          ['B', 31],
          ['C', 24],
          ['D', 10],
          ['E', 6],
          ['FX', 5],
          ['FN', 1]
        ]);

        var options = {
          title: '2017/2018'
        };

        var chart = new google.visualization.PieChart(document.getElementById('2017/2018'));

        chart.draw(data, options);
      }
      function drawChart6() {

        var data = google.visualization.arrayToDataTable([
          ['Grade', 'Amount'],
          ['A', 14],
          ['B', 55],
          ['C', 45],
          ['D', 15],
          ['E', 2],
          ['FX', 4],
          ['FN', 0]
        ]);

        var options = {
          title: '2016/2017'
        };

        var chart = new google.visualization.PieChart(document.getElementById('2016/2017'));

        chart.draw(data, options);
      }
      function drawChartmy() {
        var data = google.visualization.arrayToDataTable([
          ['Grade', '2021/2022', '2020/2021','2019/2020','2018/2019','2017/2018','2016/2017'],
          ['A',50,55,22,23,24,14],
          ['B',42,48,36,20,31,55],
          ['C',36,26,36,14,24,45],
          ['D',18,8,35,3,10,15],
          ['E',10,5,4,1,6,2],
          ['FX',0,0,3,5,5,4],
          ['FN',7,2,1,2,1,0]
        ]);
        if (window.innerWidth > 1000) {
              
          var options = {
            orientation: 'horizontal' 
            
          };
        }
        else if(window.innerWidth < 1000) {
        
          var options = {
            orientation: 'vertical' 
            
          };
        }

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }