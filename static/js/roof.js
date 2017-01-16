$(document).ready(function() {
    var $div = $('.item');

    for (var i = 0; i < $div.length; i++) {
    	getArr($div);
    }
    console.log(sumArr);
});

var sumArr = [];

function getArr(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('ть: ');
	tmpArr = tmpArr[1].split(' ');
	sumArr.push(tmpArr[0]);
}