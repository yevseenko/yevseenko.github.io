function sequence(start,step){
  var result = null;
  return function() {
    if (start === undefined) {
      start = 0;
    };
    if (step === undefined) {
      step = 1;
    };
    return result = (result === null) ? start : (result + step);
  };
};

function take(gen,x){
  var arr = [];
  for (var i = 0; i < x; i++) {
    arr.push(gen);
  }
  return arr;
}

var generator = sequence(0,2);
var generator2 = sequence(7,1);