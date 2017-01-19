$(document).ready(function() {
    var $div = $('div.item');
    var	$totalNeed = $('#totalNeed');
    var	$totalSum = $('#totalSum');

    for (var i = 0; i < $div.length; i++) {
    	getArr($div[i]);
    	getArrSum($div[i]);
    }

    $totalSum[0].innerHTML = 'Уже сдано: ' + sumArr.reduce(function(sum, current){ return sum + current }, 0) + ' ₴ (гривен)';
    $totalNeed[0].innerHTML = 'Еще необходимо сдать: ' + totalArr.reduce(function(sum, current){ return sum + current }, 0) + ' ₴ (гривен)';
});

var totalArr = [];
var sumArr = [];

function getArr(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('ть: ');
	tmpArr = tmpArr[1].split(' ');
	var tmpVal = parseInt(tmpArr[0]);
	if (tmpVal == 1500) {
		$(elem).addClass('kill');
	} else if (tmpVal < 1500 && tmpVal != 0) {
		$(elem).addClass('proc');
	} else {
		$(elem).addClass('good');
	}
	totalArr.push(tmpVal);
}

function getArrSum(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('но: ');
	tmpArr = tmpArr[1].split(' ');
	sumArr.push(parseInt(tmpArr[0]));
}

var values = [ 
	{category: 1, val1: 2, val2: 3},
	{category: 1, val1: 5, val2: 4},
	{category: 1, val1: 7, val2: 7},
	{category: 2, val1: 21, val2: 21}, 
	{category: 2, val1: 42, val2: 23},
	{category: 3, val1: 2, val2: 3} 
] 

var totalSum = {val1:0, val2:0}; 
var categoriesSum = {}; 

values.forEach(function(v){ 
	var categorySum = categoriesSum[v.category] || (categoriesSum[v.category] = {val1:0, val2:0}); 
	categorySum.val1 += v.val1; 
	categorySum.val2 += v.val2; 
	totalSum.val1 += v.val1; 
	totalSum.val2 += v.val2; 
	}); 

console.log(totalSum); 
console.log(categoriesSum);