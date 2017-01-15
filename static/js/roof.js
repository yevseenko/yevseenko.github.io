$(document).ready(function() {
		var $div = $('.item');

        var tmpArr = $div[23].innerHTML;
        tmpArr = tmpArr.split('ть: ');
        console.log(tmpArr);
});