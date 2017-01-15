$(document).ready(function() {
		var $div = $('.item');

        var tmpArr = $div[23].innerHTML;
        tmpArr = tmpArr.split('ть: ');
        tmpArr = tmpArr.split(' ');
        console.log(tmpArr[0]);
});