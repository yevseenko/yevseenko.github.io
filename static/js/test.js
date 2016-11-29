function sequence(start,step){
  var result = null;
  if (start === undefined) {
    start = 0;
  };
  if (step === undefined) {
    step = 1;
  };
  return function() {
    return result = (result === null) ? start : (result + step);
  };
};


function take(gen,x){
  var arr = [];
  for (var i = 0; i < x; i++) {
    arr.push(gen());
  };
  return arr;
};


function map(fn,arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    newArr.push(fn(arr[i]));
  }
  return newArr + " " + arr;
}
function square(x){
  return x * x;
}

function fmap(a,gen) {
  
}


var arr = [1,2,3];
var generator = sequence(0,2);
var generator2 = sequence(7,1);