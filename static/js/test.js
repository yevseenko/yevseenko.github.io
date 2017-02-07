'use strict';

function rotate(str) {
    var current = str.split('');
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var shifted = current.shift();
        current.push(shifted);
        arr.push(current.join(''));
    }
    return arr;
}

// countChar("fizzbuzz", "z")

// Math.exp(Math.log(81) / 2).toFixed(5)