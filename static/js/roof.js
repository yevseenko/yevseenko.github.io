$(document).ready(function() {
    var $div = $('.item');

    for (var i = 0; i < $div.length; i++ ) {
    	console.log(total($div[i]));
    }
});

function total(arr) {
		var tmpArr = arr.innerHTML;
		tmpArr = tmpArr.split('ть: ');
		tmpArr = tmpArr[1].split(' ');
		return tmpArr[0];
}