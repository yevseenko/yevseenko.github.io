window.onload = function init() {
    $stMenu = document.getElementById('st_menu');
    $stMenu.innerHTML = '<div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#"><span class="glyphicon glyphicon-console" aria-hidden="true"></span></a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="../index.html">Главная</a></li><li><a href="#">О приложении</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ссылки <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="../static/compare.html">Сравнение расходников</a></li><li><a href="#">Сравнение по позициям</a></li><li><a href="#">Наличие новых</a></li><li role="separator" class="divider"></li><li class="dropdown-header">Информация</li><li><a href="#">Godville voice\'s</a></li><li><a href="#">test page</a></li></ul></li><li><a href="../static/contacts.html">Контакты</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> GW2 Helper</a></li></ul></div></div>';
    $box = document.getElementById('box');
    $reset = document.getElementById('resetCountBtn');
    $next = document.getElementById('nextCountBtn');
    $set = document.getElementById('setCountBtn');

    $box.innerHTML = counter();
    $next.onclick = (function() {$box.innerHTML = counter();})
    $reset.onclick = (function() {$box.innerHTML = counter.reset();})
    $set.onclick = (function() {$box.innerHTML = counter.set(10);})
  }

//счетчик
function makeCounter(){
  var currentCount = 1;
  function counter() {
    return currentCount++;
  }
  counter.set = function(value){
    currentCount = value;
  }
  counter.reset = function() {
    currentCount = 1;
  }
  return counter;
}

var counter = makeCounter();