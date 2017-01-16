$(document).ready(function() {
    var $div = $('.item');

    for (var i = 0; i < $div.length; i++) {
    	getArr($div[i]);
    }
    console.log(result);
});

var sumArr = [];

var result = sumArr.reduce(function(sum, current) {
  return sum + current;
}, 0)

function getArr(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('ть: ');
	tmpArr = tmpArr[1].split(' ');
	sumArr.push(tmpArr[0]);
}