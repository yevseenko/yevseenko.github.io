$(document).ready(function() {
    var $div = $('.item');

    var totalSum = $div.map(function(arr) {
    	return arr.length;
	});
    console.log(totalSum);
});

//		var tmpArr = arr.innerHTML;
//		tmpArr = tmpArr.split('ть: ');
//		tmpArr = tmpArr[1].split(' ');
//		return tmpArr[0];