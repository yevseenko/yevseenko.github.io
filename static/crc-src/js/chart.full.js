jQuery(function ($) {
  var $auto = $('#auto'),
    $mark = $('#mark'),
    $stage = $('#stage'),
    $autoEngine = $('#auto-engine'),
    $pixelInfo = $('#pixel-info'),
    $chartForm = $('#chart-form'),
    $chartInfo = $('#chart-info'),
    $chartVideo = $('#chart-video'),

    $stock = $('#stock'),
    $stageOne = $('#stage-one'),
    $stageTwo = $('#stage-two');

  $chartForm.submit(function () {
    return false;
  });

  $pixelInfo.hide();

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
    var manufacturer = $auto.val();
    var model = $mark.val();
    if ($(this).val()) {
      var engine = $(this).val();
      var currentHp = cache[manufacturer][model][engine].hp;
      var currentTorque = cache[manufacturer][model][engine].torque;


      if (cache[manufacturer][model][engine].video) {
        $chartVideo.show();
        $chartVideo.html('<td colspan="7"><h4><a href="' + cache[manufacturer][model][engine].video + '">Наш ВИДЕООБЗОР на данную машину.</a></h4></td>');
      } else {
        $chartVideo.hide();
      }

      $stock.html('<td>' + manufacturer + '</td><td>' + model + '</td><td>' + engine + '</td><td>' + currentHp + '</td><td>' + currentTorque + '</td><td>Stock</td><td> ~ </td>');
      $stageOne.html('<td colspan="3"></td><td>' + (currentHp + currentHp * 0.2) + '</td><td>' + (currentTorque + currentTorque * 0.2) + '</td><td>Stage 1</td><td> ~ </td>');
      $stageTwo.html('<td colspan="3"></td><td>' + (currentHp + currentHp * 0.29) + '</td><td>' + (currentTorque + currentTorque * 0.27) + '</td><td>Stage 2</td><td> ~ </td>');
      $chartInfo.html('<td colspan="7" class="text-success"><h4>Дальнешие модификации требуют установки дополнительных модулей.</h4></td>');

      $stageOne.removeClass('text-up');
      $stageTwo.removeClass('text-up');
      $stock.addClass('text-up');
    }
  });

  // $stage.change(function () {
  //   stage = $('option:selected', this).attr('data-stage');

  //   if (stage >= 40) {
  //     $chartInfo.html('<td colspan="7" class="text-success"></td>');
  //   } else {
  //     $chartInfo.html('<td colspan="7" class="text-success"></td>');
  //   }

  // });

  //=== Fade/Toggle/Slowdown ===//

  $autoEngine.change(() => {
    $pixelInfo.slideDown(600, () => {
      $pixelInfo.show();
    });
    $stage.prop("selectedIndex", 0);
  });

  $auto.change(() => {
    $pixelInfo.slideUp(600, () => {
      $pixelInfo.hide();
    });
    $stage.prop("selectedIndex", 0);
  });

  $mark.change(() => {
    $pixelInfo.slideUp(600, () => {
      $pixelInfo.hide();
    });
    $stage.prop("selectedIndex", 0);
  });


  $stage.change(() => {
    var val = $stage.val();
    if (val == 'Stock') {
      $stageOne.removeClass('text-up');
      $stageTwo.removeClass('text-up');
      $stock.addClass('text-up')
    }
    if (val == 'Stage 1') {
      $stock.removeClass('text-up');
      $stageTwo.removeClass('text-up');
      $stageOne.addClass('text-up')
    }
    if (val == 'Stage 2') {
      $stageOne.removeClass('text-up');
      $stock.removeClass('text-up');
      $stageTwo.addClass('text-up');
    }
  });


  // $chartButton.click(function () {
  //   $chartInfoPreview.fadeToggle('linear', function () {
  //     $chartForm.slideDown(600, function () {
  //       $chartForm.show();
  //     });
  //   });
  // });

  // $btnClose.click(function () {
  //   $chartInfoPreview.fadeToggle('slow', function () {
  //     $chartForm.slideUp();
  // });
  // });
});
