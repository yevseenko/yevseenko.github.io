$(document).ready(function() {
    var $div = $('.item');

    for (var i = 0; i < $div.length; i++ ) {
    	console.log(total($div));
    }
});

function total(arr) {
		var tmpArr = arr[i].innerHTML;
		tmpArr = tmpArr.split('ть: ');
		tmpArr = tmpArr[1].split(' ');
		return tmpArr[0];
}