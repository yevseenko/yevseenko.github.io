'use strict';

function longestConsec(strarr, k) {
	if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    return strarr.sort(function(a,b){return a.length < b.length}).slice(0,k).join('');
}


// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)

// https://www.codewars.com/kata/consecutive-strings/train/javascript