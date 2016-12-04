$(document).ready(function() {
	$dclock = document.getElementById('dclock');
	digitalClock();
});

var dayOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
month = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];

function digitalClock() {
	var date = new Date(),
   	seconds = date.getSeconds(),
   	minutes = date.getMinutes(),
   	hours = date.getHours(),
   	day = date.getDate(),
   	nDay = date.getDay(),
   	nMonth = date.getMonth(),
   	year = date.getFullYear();

	function formatedString() {
		return dayOfWeek[nDay] + ', ' + day + ' ' + month[nMonth] + ', ' + year + '<b> ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + '</b>';
	}

   	$dclock.innerHTML = formatedString();

   	setTimeout(digitalClock, 1000);
};

function addZero(n) {
	if (n < 10) {
		return n = "0" + n;
	} else {
		return n;
	}
};