
jQuery(function ($) {
  var $auto = $('#auto');
  var $mark = $('#mark');
  var $stage = $('#stage');

  var currentHp, currentTorque;
  var stage = 20;
  var dataOne = [];
  var dataTwo = [];

  var markList = {
    'BMW': [{ name: 'X5', hp: 171, torque: 250 }, { name: '320x', hp: 250, torque: 350 }, { name: 'zxr89', hp: 450, torque: 700 }],
    'Mers': [{ name: 'g.546 2.4', hp: 195, torque: 275 }, { name: 'JD564 2.8', hp: 320, torque: 400 }, { name: '720xxq 4.0', hp: 372, torque: 650 }],
  }

  $auto.change(function () {
    var auto = $(this).val(),
      auma = markList[auto] || [];

    var html = '<option></option>' + $.map(auma, function (lcn) {
      var thx = '<option value="' + lcn.name + '"' + 'data-hp="' + lcn.hp + '"' + 'data-torque="' + lcn.torque + '">' + lcn.name + '</option>';
      return thx;
    }).join('');
    $mark.html(html);

    addData(hpLine, []);
    addData(torqueLine, []);
  });

  $mark.change(function () {
    var hp = $('option:selected', this).attr('data-hp'),
      torque = $('option:selected', this).attr('data-torque');
    
    currentTorque = Number(torque);
    currentHp = Number(hp);
    dataOne = [0, currentHp / 4, currentHp / 3, currentHp / 1.5, currentHp, currentHp / 1.5, currentHp / 3];
    dataTwo = [0, currentTorque / 5, currentTorque / 3.5, currentTorque / 1.5, currentTorque, currentTorque / 1.5, currentTorque / 4];

    addData(hpLine, dataOne);
    addData(torqueLine, dataTwo);
  });

  $stage.change(function() {
    stage = $('option:selected', this).attr('data-stage');

    changeData(hpLine, dataOne);
    changeData(torqueLine, dataTwo);
  })

  var config = {
    type: 'line',
    data: {
      labels: ["", "", "", "", "", "", ""],
      datasets: [{
        label: "До чипа",
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
        data: dataOne.map(x => Math.round(x)),
        fill: false,
      }, {
        label: "После чипа",
        fill: "-1",
        backgroundColor: "rgba(75, 192, 192, .3)",
        borderColor: window.chartColors.green,
        data: dataOne.map(x => Math.round(x + x / 100 * 30)),
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
        data: dataTwo.map(x => Math.round(x)),
        fill: false,
      }, {
        label: "После чипа",
        fill: "-1",
        backgroundColor: "rgba(54, 162, 235, .3)",
        borderColor: window.chartColors.blue,
        data: dataTwo.map(x => Math.round(x + x / 100 * 30)),
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

  var ctx = document.getElementById("chart-0").getContext("2d");
  window.hpLine = new Chart(ctx, config);
  var btx = document.getElementById("chart-1").getContext("2d");
  window.torqueLine = new Chart(btx, configBtx);


  function addData(chart, data) {
    chart.data.datasets[0].data = data;
    chart.data.datasets[1].data = data.map(x => Math.round(x + x / 100 * stage));    
    chart.update();
  }

  function changeData(chart, data) {
    chart.data.datasets[1].data = data.map(x => Math.round(x + x / 100 * stage));    
    chart.update();
  }

  function removeData(chart) {
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
});
