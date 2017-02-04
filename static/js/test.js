'use strict';

function fastestIsPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}

//Decorator
function logArgs(f){
  return function(){
    console.log(arguments);
    return f.apply(this, arguments);
  }
}

function sum(x,y) {
  return x + y;
}