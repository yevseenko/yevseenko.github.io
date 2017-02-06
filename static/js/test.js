'use strict';

function longestConsec(strarr, k) {
	if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
	var arr = [];
	for (var i = 0; i <= (strarr.length/k) + 1 ; i++) {
		arr.push(strarr.slice(i,i+k).join(''));
	}
	return arr;
}


// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)

// https://www.codewars.com/kata/consecutive-strings/train/javascript