$(document).ready(function() {
    var $div = $('.item');

    for (var i = 0; i < $div.length; i++) {
    	getArr($div[i]);
    }
    var result = sumArr.reduce(function(sum, current) {
  		return sum + current;
		}, 0);
    console.log(result);
});

var sumArr = [];

function getArr(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('ть: ');
	tmpArr = tmpArr[1].split(' ');
	sumArr.push(parseInt(tmpArr[0]));
}