$(document).ready(function() {
    $box = document.getElementById('box');
    $reset = document.getElementById('resetCountBtn');
    $next = document.getElementById('nextCountBtn');
    $set = document.getElementById('setCountBtn');
    $setCount = document.getElementById('setCount');
    
    $box.innerHTML = "Counter: " + counter();
    $next.onclick = (function() {$box.innerHTML = "Counter: " + counter()});
    $reset.onclick = (function() {$box.innerHTML = "Counter: " + counter.reset()});
    $set.onclick = (function() {$box.innerHTML = "Counter: " + counter.set($setCount.value)});
  });

//примитивный счетчик
function makeCounter(){
  var currentCount = 1;
  function counter() {
    return currentCount++;
  }
  counter.set = function(value){
    if (!value) {
      return currentCount = "значение не задано";
    } else {
      return currentCount = value;
    }
  }
  counter.reset = function() {
    return currentCount = 1;
  }
  return counter;
};

var counter = makeCounter();

/* Странный комментарий для теста */