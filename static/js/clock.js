$(document).ready(function() {
	$dclock = document.getElementById('dclock');
	digitalClock();
});

function digitalClock() {
	var date = new Date(),
   	seconds = date.getSeconds(),
   	minutes = date.getMinutes(),
   	hours = date.getHours(),
   	day = date.getDate(),
   	nDay = date.getDay(),
   	nMonth = date.getMonth(),
   	year = date.getFullYear(),
   	dayOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
   	month = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];

   	if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

   	$dclock.innerHTML = dayOfWeek[nDay] + ", " + day + " " + month[nMonth] + ", " + year + "<b> " + hours + ":" + minutes + ":" + seconds + "</b>";  	

    setTimeout("digitalClock()", 1000);
}
