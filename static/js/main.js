window.onload = function() {
	$dclock = document.getElementById('dclock');
	digitalClock();
}

var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function digitalClock() {
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

function formatedString() {
	var date = new Date(),
   	seconds = date.getSeconds(),
   	minutes = date.getMinutes(),
   	hours = date.getHours(),
   	day = date.getDate(),
   	nDay = date.getDay(),
   	nMonth = date.getMonth(),
   	year = date.getFullYear();
	
	return dayOfWeek[nDay] + ', ' + day + ' ' + month[nMonth] + ', ' + year + ' ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
};