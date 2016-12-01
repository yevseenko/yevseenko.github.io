window.onload = function init() {
    $stMenu = document.getElementById('st_menu');
    $stMenu.innerHTML = '<div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#"><span class="glyphicon glyphicon-console" aria-hidden="true"></span></a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="../index.html">Главная</a></li><li><a href="#">О приложении</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ссылки <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="../static/compare.html">Сравнение расходников</a></li><li><a href="#">Сравнение по позициям</a></li><li><a href="#">Наличие новых</a></li><li role="separator" class="divider"></li><li class="dropdown-header">Информация</li><li><a href="#">Godville voice\'s</a></li><li><a href="#">test page</a></li></ul></li><li><a href="../static/contacts.html">Контакты</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> GW2 Helper</a></li></ul></div></div>';
    $box = document.getElementById('box');
    $reset = document.getElementById('resetCountBtn');
    $next = document.getElementById('nextCountBtn');
    $set = document.getElementById('setCountBtn');
    $field = document.getElementById('field');
    $setCount = document.getElementById('setCount');

    $box.innerHTML = counter();
    $next.onclick = (function() {$box.innerHTML = counter();})
    $reset.onclick = (function() {$box.innerHTML = counter.reset()})
    $set.onclick = (function() {$box.innerHTML = counter.set($setCount.value);})
    $field.innerHTML = (phi(tableFor("peanuts teeth", journal)));
  }

//счетчик
function makeCounter(){
  var currentCount = 1;
  function counter() {
    return currentCount++;
  }
  counter.set = function(value){
    return currentCount = value;
  }
  counter.reset = function() {
    return currentCount = 1;
  }
  return counter;
}

var counter = makeCounter();

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var journal = [{"events":["carrot","exercise","weekend"],"squirrel":false},{"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},{"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},{"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},{"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},{"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},{"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},{"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},{"events":["cauliflower","brushed teeth","work"],"squirrel":false},{"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},{"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},{"events":["brushed teeth","weekend","touched tree"],"squirrel":false},{"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},{"events":["spaghetti","brushed teeth","work"],"squirrel":false},{"events":["brushed teeth","computer","work"],"squirrel":false},{"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},{"events":["carrot","brushed teeth","running","work"],"squirrel":false},{"events":["brushed teeth","work"],"squirrel":false},{"events":["cauliflower","reading","weekend"],"squirrel":false},{"events":["bread","brushed teeth","weekend"],"squirrel":false},{"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},{"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},{"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},{"events":["spaghetti","nachos","work"],"squirrel":false},{"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},{"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},{"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},{"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},{"events":["peanuts","brushed teeth","running","work"],"squirrel":false},{"events":["potatoes","exercise","work"],"squirrel":false},{"events":["pizza","ice cream","computer","work"],"squirrel":false},{"events":["lasagna","ice cream","work"],"squirrel":false},{"events":["cauliflower","candy","reading","weekend"],"squirrel":false},{"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},{"events":["potatoes","brushed teeth","work"],"squirrel":false},{"events":["carrot","work"],"squirrel":false},{"events":["pizza","beer","work","dentist"],"squirrel":false},{"events":["lasagna","pudding","cycling","work"],"squirrel":false},{"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},{"events":["spaghetti","pudding","television","weekend"],"squirrel":false},{"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},{"events":["lasagna","peanuts","work"],"squirrel":true},{"events":["pizza","work"],"squirrel":false},{"events":["potatoes","exercise","work"],"squirrel":false},{"events":["brushed teeth","exercise","work"],"squirrel":false},{"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},{"events":["pizza","cycling","weekend"],"squirrel":false},{"events":["carrot","brushed teeth","weekend"],"squirrel":false},{"events":["carrot","beer","brushed teeth","work"],"squirrel":false},{"events":["pizza","peanuts","candy","work"],"squirrel":true},{"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false}, {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false}, {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},{"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},{"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},{"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},{"events":["lettuce","brushed teeth","television","work"],"squirrel":false},{"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},{"events":["bread","candy","work"],"squirrel":false},{"events":["potatoes","nachos","work"],"squirrel":false},{"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},{"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},{"events":["brussel sprouts","running","work"],"squirrel":false},{"events":["brushed teeth","work"],"squirrel":false},{"events":["lettuce","brushed teeth","running","work"],"squirrel":false},{"events":["candy","brushed teeth","work"],"squirrel":false},{"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},{"events":["bread","brushed teeth","weekend"],"squirrel":false},{"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},{"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},{"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},{"events":["lettuce","brushed teeth","work"],"squirrel":false},{"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},{"events":["pizza","brushed teeth","work"],"squirrel":false},{"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},{"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},{"events":["brushed teeth","running","work"],"squirrel":false},{"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},{"events":["lasagna","brushed teeth","television","work"],"squirrel":false},{"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},{"events":["carrot","brushed teeth","running","work"],"squirrel":false},{"events":["carrot","reading","weekend"],"squirrel":false},{"events":["carrot","peanuts","reading","weekend"],"squirrel":true},{"events":["potatoes","brushed teeth","running","work"],"squirrel":false},{"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},{"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},{"events":["pizza","brushed teeth","running","work"],"squirrel":false},{"events":["lettuce","brushed teeth","work"],"squirrel":false},{"events":["bread","brushed teeth","television","weekend"],"squirrel":false},{"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}];

var correlations = gatherCorrelations(journal);

for (var i = 0; i < journal.length; i++) {
  var entry = journal[i];
  if (hasEvent("peanuts", entry) &&
     !hasEvent("brushed teeth", entry))
    entry.events.push("peanuts teeth");
}