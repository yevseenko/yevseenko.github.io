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
	if (parseInt(tmpArr[0]) == 1500) {
		$(elem).addClass('kill');
	}
	totalArr.push(parseInt(tmpArr[0]));
}

function getArrSum(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('но: ');
	tmpArr = tmpArr[1].split(' ');
	if (parseInt(tmpArr[0]) > 0) {
		$(elem).removeClass('kill');
		$(elem).addClass('proc');
	}
	sumArr.push(parseInt(tmpArr[0]));
}