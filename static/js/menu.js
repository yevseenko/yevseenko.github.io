window.onload = function() {
	$stMenu = document.getElementById('st_menu');
	$dclock = document.getElementById('dclock');

	digitalClock();
	$stMenu.innerHTML = initMenu();
}

var dayOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
month = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];

function initMenu() {
	return '<div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#"><span class="glyphicon glyphicon-console" aria-hidden="true"></span></a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="../index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Главная</a></li><li><a href="#"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> О приложении</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-link" aria-hidden="true"></span> Ссылки <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="../static/compare.html">Сравнение расходников</a></li><li><a href="#">Сравнение по позициям</a></li><li><a href="#">Наличие новых</a></li><li role="separator" class="divider"></li><li class="dropdown-header">testPlatform</li><li><a href="../static/my_sp.html">jQuery & Spider\'s</a></li><li><a href="../static/test.html"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Trash page</a></li></ul></li><li><a href="../static/contacts.html"><span class="glyphicon glyphicon-sunglasses" aria-hidden="true"></span> Контакты</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="../static/crc.html"><span class="glyphicon glyphicon-dashboard" aria-hidden="true"></span> CRC Auto</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-fire" aria-hidden="true"></span> GW2 Helper <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="http://qtfy.enjin.com/builds">[qT] Build\'s</a></li><li><a href="../static/li.html">Legendary Insight\'s</a></li><li role="separator" class="divider"></li><li class="dropdown-header">Полезное</li><li><a href="#">link</a></li></ul></li></ul></div></div>';
};

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
	
	return dayOfWeek[nDay] + ', ' + day + ' ' + month[nMonth] + ', ' + year + '<b> ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' <_</b>';
};