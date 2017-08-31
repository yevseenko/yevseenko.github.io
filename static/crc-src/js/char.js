
jQuery(function($) {
  const $auto = $('#auto');
  const $mark = $('#mark');
  
  var markList = {
    'BMW': ['Тележка','Космический корабль','Без колес'],
    'Mers': ['Тележка','Космический корабль','Без колес'],
    'Mars': ['Тележка','Космический корабль','Без колес'],
    'Saturn': ['Тележка','Космический корабль','Без колес'],
    'Balkon': ['Тележка','Космический корабль','Без колес']
  }
  
  $auto.change(function() {
    var autoMark = $(this).val(), 
        auma = markList[autoMark] || [];
    
    var html = $.map(auma, function(lcn){
        return '<option value="' + lcn + '">' + lcn + '</option>'
    }).join('');
    $mark.html(html);
  });
});

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var config = {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "До чипа",
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.orange,
            data: [
                10,
                20,
                30,
                40,
                65,
                40,
                30
            ],
            fill: -1,
        }, {
            label: "После чипа",
            fill: -8,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.green,
            data: [
                20,
                30,
                40,
                50,
                85,
                50,
                40
            ],
        }]
    },
    options: {
        responsive: true,
        title:{
            display:true,
            text:'Л.С. Автомобиля'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById("chart-0").getContext("2d");
    window.myLine = new Chart(ctx, config);
};