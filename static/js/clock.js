$(document).ready(function() {
	$dclock = document.getElementById('dclock');
	digitalClock();
});

function digitalClock() {
	var date = new Date(),
   	currentDate = date.toLocaleString();
    $dclock.innerHTML = currentDate;
    setTimeout("digitalClock()", 1000);
}
