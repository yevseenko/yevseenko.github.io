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
	var start = Date.parse("Mar 31, 2015");
	var date = Date.now();
	var result = date - start;

	return result;
};
