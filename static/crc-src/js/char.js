
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

var config = {
  type: 'line',
  data: {
    labels: ["0", "~", "~", "~", "~", "~", "~"],
    datasets: [{
      label: "До чипа",
      backgroundColor: window.chartColors.orange,
      borderColor: window.chartColors.orange,
      data: [
        0,
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
      backgroundColor: window.chartColors.green,
      borderColor: window.chartColors.green,
      data: [
        9,
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
      data: [
        0,
        50,
        70,
        100,
        137,
        110,
        101
      ],
      fill: false,
    }, {
      label: "После чипа",
      fill: false,
      backgroundColor: window.chartColors.blue,
      borderColor: window.chartColors.blue,
      data: [
        9,
        70,
        95,
        135,
        162,
        123,
        101
      ],
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
