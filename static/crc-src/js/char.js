
jQuery(function ($) {
  var $auto = $('#auto');
  var $mark = $('#mark');

  var markList = {
    'BMW': [{name: 'X5', hp: 171, torque: 250}, {name: '320x', hp: 250, torque: 350}, {name: 'zxr89', hp: 450, torque: 700}],
    'Mers': [{name: 'g.546 2.4', hp: 195, torque: 275}, {name: 'JD564 2.8', hp: 320, torque: 400}, {name: '720xxq 4.0', hp: 372, torque: 650}],
  }

  $auto.change(function () {
    var autoMark = $(this).val(),
      auma = markList[autoMark] || [];

    var html = '<option></option>' + $.map(auma, function (lcn) {
      return '<option value="' + lcn.name + '">' + lcn.name + '</option>'
    }).join('');
    $mark.html(html);
  });

  $mark.change(function() {
    var current = $(this).val();
    console.log(current);
  })

});

var currentHp = 171;
var currentTorque = 370;
var dataOne = [0, currentHp/4, currentHp/3, currentHp/1.5, currentHp, currentHp/1.5, currentHp/3]
var dataTwo = [0, currentTorque/5, currentTorque/3.5, currentTorque/1.5, currentTorque, currentTorque/1.5, currentTorque/4]

var config = {
  type: 'line',
  data: {
    labels: ["", "", "", "", "", "", ""],
    datasets: [{
      label: "До чипа",
      backgroundColor: window.chartColors.orange,
      borderColor: window.chartColors.orange,
      data: dataOne.map(x => Math.round(x)),
      fill: -1,
    }, {
      label: "После чипа",
      fill: -8,
      backgroundColor: window.chartColors.green,
      borderColor: window.chartColors.green,
      data: dataOne.map( x => Math.round(x + x/100*30) ),
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Л.С. Автомобиля'
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
        display: true        
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Значение'
        }
      }]
    }
  }
};

var configBtx = {
  type: 'line',
  data: {
    labels: ["", "", "", "", "", "", ""],
    datasets: [{
      label: "До чипа",
      backgroundColor: window.chartColors.red,
      borderColor: window.chartColors.red,
      data: dataTwo.map( x => Math.round(x) ),
      fill: false,
    }, {
      label: "После чипа",
      fill: false,
      backgroundColor: window.chartColors.blue,
      borderColor: window.chartColors.blue,
      data: dataTwo.map( x => Math.round(x + x/100*30) ),
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'К.М. Автомобиля'
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
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Значение'
        }
      }]
    }
  }
};

window.onload = function () {
  var ctx = document.getElementById("chart-0").getContext("2d");
  window.myLine = new Chart(ctx, config);
  var btx = document.getElementById("chart-1").getContext("2d");
  window.myLine = new Chart(btx, configBtx);
};
