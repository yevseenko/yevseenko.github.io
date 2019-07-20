(function(){
  console.log('Hello new script');
  var snakeHead = document.querySelector('#snake');

  var position = 0;

  setInterval(function(){
    position += 5;
    snakeHead.style.left = position + 'px';
    console.log('+1');
  }, 1000);
})();
