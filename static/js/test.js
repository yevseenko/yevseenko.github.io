//*функция, возвращает функцию генератор
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

//берет в качестве аргументов - функцию, выполняет её х раз и возвращает массив значений
function take(gen,x){
  var arr = [];
  for (var i = 0; i < x; i++) {
    arr.push(gen());
  };
  return arr;
};

//берет в качестве аргументов функцию и массив, выполняет функцию для каждого элемента массива и возвращает массив значений
function map(fn,arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    newArr.push(fn(arr[i]));
  }
  return newArr + " " + arr;
}
//возведение в квадрат
function square(x){
  return x * x;
}

// принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той, что была в первом задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a
function fmap(a,gen) {
  
}


var arr = [1,2,3];
var generator = sequence(0,2);
var generator2 = sequence(7,1);