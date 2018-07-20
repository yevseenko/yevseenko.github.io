jQuery(function ($) {
  var $auto = $('#auto'),
    $mark = $('#mark'),
    $stage = $('#stage'),
    $autoEngine = $('#auto-engine'),
    $pixelInfo = $('#pixel-info'),
    $chartButton = $('#chart-button'),
    $chartForm = $('#chart-form'),
    $chartInfo = $('#chart-info'),
    $chartInfoPreview = $('#chart-info-preview'),
    $btnClose = $('#btn-close'),
    
    $stock = $('#stock'),
    $stageOne = $('#stage-one'),
    $stageTwo = $('#stage-two');

  $chartForm.submit(function () {
    return false;
  });

  //=== DataBase Init ===//

  var config = {
    apiKey: "AIzaSyDXx4uVtEcU0c-G1oKrcLXs-pESh4goVkU",
    authDomain: "torque-f5ed4.firebaseapp.com",
    databaseURL: "https://torque-f5ed4.firebaseio.com",
    projectId: "torque-f5ed4",
    storageBucket: "torque-f5ed4.appspot.com",
    messagingSenderId: "140933235811"
  };

  firebase.initializeApp(config);

  var database = firebase.database().ref();
  var data = database.once('value');

  var cache = {};

  data.then((snap) => {
    cache = snap.val();
  });

  data.then((snap) => {
    var arr = Object.keys(snap.val());
    $auto.html('<option></option>' + arr.map(item => '<option value="' + item + '">' + item + '</option>').join(''))
  });

  //=== Onchange functions ===//

  $auto.change(function () {
    $mark.html('');
    $autoEngine.html('');

    console.log(cache);

    var manufacturer = $(this).val();

    if (manufacturer) {
      var arr = Object.keys(cache[manufacturer]);
      $mark.html('<option></option>' + arr.map(item => '<option value="' + item + '">' + item + '</option>'));
    };
  });

  $mark.change(function () {
    $autoEngine.html('');

    var model = $(this).val();
    var manufacturer = $auto.val();

    if (model && manufacturer) {
      var arr = Object.keys(cache[manufacturer][model]);
      $autoEngine.html('<option></option>' + arr.map(item => '<option value="' + item + '">' + item + '</option>'));
    };

    //$pixelInfo.html('<h3>Машина: ' + $auto.val() + ' Модель: ' + $mark.val() + ' Модификация: ' + $autoEngine.val() + ' Чип: ' + $stage.val() + '</h3>');
  });

  //$mark.change(function () {
  //  var hp = $('option:selected', this).attr('data-hp'),
  //    torque = $('option:selected', this).attr('data-torque');
  //
  //  currentTorque = Number(torque);
  //  currentHp = Number(hp);
  //  dataOne = [0, currentHp / 4, currentHp / 3, currentHp / 1.5, currentHp, currentHp / 1.5, currentHp / 3];
  //  dataTwo = [0, currentTorque / 5, currentTorque / 3.5, currentTorque / 1.5, currentTorque, currentTorque / 1.5, currentTorque / 4];
  //
  //});

  $autoEngine.change(function () {
    var engine = $(this).val();
    var model = $mark.val();
    var manufacturer = $auto.val();
    var stage = $stage.val();

    $stock.html('<td>' + manufacturer + '</td><td>' + model + '</td><td>' + engine + '</td><td>' + cache[manufacturer][model][engine].hp + '</td><td>' + cache[manufacturer][model][engine].torque + '</td><td>Stock</td><td> ~ </td>');
    $stageOne.html('<td colspan="3"></td><td>' + (cache[manufacturer][model][engine].hp + cache[manufacturer][model][engine].hp*0.2) + '</td><td>' + (cache[manufacturer][model][engine].torque + cache[manufacturer][model][engine].torque*0.2) + '</td><td>Stage 1</td><td> ~ </td>');
    $stageTwo.html('<td colspan="3"></td><td>' + (cache[manufacturer][model][engine].hp + cache[manufacturer][model][engine].hp*0.29) + '</td><td>' + (cache[manufacturer][model][engine].torque + cache[manufacturer][model][engine].torque*0.27) + '</td><td>Stage 2</td><td> ~ </td>')
    $chartInfo.html('<td colspan="7" class="text-success">Дальнешие модификации требуют установки дополнительных модулей.</td>')
  });

  $stage.change(function () {
    stage = $('option:selected', this).attr('data-stage');

    if (stage >= 40) {
      $chartInfo.html('<td colspan="7" class="text-success"></td>');
    } else {
      $chartInfo.html('<td colspan="7" class="text-success"></td>');
    }

  });

  //=== Fade/Toggle/Slowdown ===//

  $chartButton.click(function () {
    $chartInfoPreview.fadeToggle('linear', function () {
      $chartForm.slideDown(600, function () {
        $chartForm.show();
      });
    });
  });

  $btnClose.click(function () {
    $chartInfoPreview.fadeToggle('slow', function () {
      $chartForm.slideUp();
    });
  });
});
