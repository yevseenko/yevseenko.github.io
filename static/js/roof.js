$(document).ready(function() {
    var $div = $('.item');

    var totalSum = $div.map(function(arr) {
		var tmpArr = arr.innerHTML;
		tmpArr = tmpArr.split('ть: ');
		tmpArr = tmpArr[1].split(' ');
		return tmpArr[0];
	});
    console.log(totalSum);
});

