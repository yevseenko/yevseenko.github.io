
jQuery(function ($) {
  const $auto = $('#auto');
  const $mark = $('#mark');

  var markList = {
    'BMW': ['Тележка', 'Космический корабль', 'Без колес'],
    'Mers': ['Тележка', 'Космический корабль', 'Без колес'],
    'Mars': ['Тележка', 'Космический корабль', 'Без колес'],
    'Saturn': ['Тележка', 'Космический корабль', 'Без колес'],
    'Balkon': ['Тележка', 'Космический корабль', 'Без колес']
  }

  $auto.change(function () {
    var autoMark = $(this).val(),
      auma = markList[autoMark] || [];

    var html = $.map(auma, function (lcn) {
      return '<option value="' + lcn + '">' + lcn + '</option>'
    }).join('');
    $mark.html(html);
  });
});

var currentHp = 171;
var currentTorque = 370;
var dataOne = [0, currentHp/4, currentHp/3, currentHp/1.5, currentHp, currentHp/1.5, currentHp/3]
var dataTwo = [0, currentTorque/5, currentTorque/3.5, currentTorque/1.5, currentTorque, currentTorque/1.5, currentTorque/4]

var config = {
  type: 'line',
  data: {
    labels: ["0", "~", "~", "~", "~", "~", "~"],
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
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Время'
        }
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
    labels: ["0", "~", "~", "~", "~", "~", "~"],
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
        scaleLabel: {
          display: true,
          labelString: 'Время'
        }
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
