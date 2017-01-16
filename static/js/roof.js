$(document).ready(function() {
    var $div = $('.item'),
    	$totalNeed = $('#totalNeed');

    for (var i = 0; i < $div.length; i++) {
    	getArr($div[i]);
    }
    
    $totalNeed.innerHTML = 'Еще необходимо сдать: ' + sumArr.reduce(function(sum, current){ return sum + current }, 0);
});

var sumArr = [];

function getArr(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('ть: ');
	tmpArr = tmpArr[1].split(' ');
	sumArr.push(parseInt(tmpArr[0]));
}