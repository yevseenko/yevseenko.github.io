$(document).ready(function() {
    var $div = $('.item');

    console.log(total($div));
});

function total(arr) {
	for (var i = 0; i < arr.length; i++) {
		var tmpArr = arr[i].innerHTML;
		tmpArr = tmpArr.split('ть: ');
		tmpArr = tmpArr[1].split(' ');
		return tmpArr[0];
	}
}