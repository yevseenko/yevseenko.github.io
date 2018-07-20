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
    $btnClose = $('#btn-close');

  $chartForm.submit(function () {
    return false;
  });

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

  databaseRef.once('value', function (snap) {
    var arr = Object.keys(snap.val());
    $auto.html('<option></option>' + arr.map(item => '<option value="' + item + '">' + item + '</option>').join(''));
  });

  $auto.change(function () {
    $mark.html('');
    $autoEngine.html('');

    var manufacturer = $(this).val();

    if (manufacturer) {
      databaseRef.on('value', function (snap) {
        var arr = Object.keys(snap.val()[manufacturer]);
        $mark.html('<option></option>' + arr.map(item => '<option value="' + item + '">' + item + '</option>'));
      });
    };
  });

  $mark.change(function () {
    $autoEngine.html('');

    var model = $(this).val();
    var manufacturer = $auto.val();

    if (model && manufacturer) {
      databaseRef.once('value', function (snap) {
        var arr = Object.keys(snap.val()[manufacturer][model]);
        $autoEngine.html('<option></option>' + arr.map(item => '<option value="' + item + '">' + item + '</option>'));
      });
    };

    $pixelInfo.html('<h3>Машина: ' + $auto.val() + ' Модель: ' + $mark.val() + ' Модификация: ' + $autoEngine.val() + ' Чип: ' + $stage.val() + '</h3>');
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

  $stage.change(function () {
    stage = $('option:selected', this).attr('data-stage');

    if (stage >= 40) {
      $chartInfo.html('<h3>Требуется установка дополнительных модулей</h3>');
    } else {
      $chartInfo.html('');
    }

  });
});

var config = {
  apiKey: "AIzaSyDXx4uVtEcU0c-G1oKrcLXs-pESh4goVkU",
  authDomain: "torque-f5ed4.firebaseapp.com",
  databaseURL: "https://torque-f5ed4.firebaseio.com",
  projectId: "torque-f5ed4",
  storageBucket: "torque-f5ed4.appspot.com",
  messagingSenderId: "140933235811"
};
firebase.initializeApp(config);

var database = firebase.database();
var databaseRef = database.ref();

databaseRef.on('value', function (snapshot) {
  var arrAuto = Object.keys(snapshot.val());
  console.log(arrAuto);
});
