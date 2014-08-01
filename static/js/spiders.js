$(document).ready(function() {
	$('#spiders').addClass('table table-bordered').width('90%');
	for(var i = 0; i < $spiders.length; i++) {
		$('<tr><td>'+i+'</td><td>'+$spiders[i].kind+'</td><td>'+$spiders[i].gender+'</td><td>'+$spiders[i].venom+'</td><td>'+$spiders[i].moult+'</td><td>'+$spiders[i].lastMoult+'</td><td>'+$spiders[i].period+'</td></tr>').appendTo('table#spiders');
	};
	$('tr:contains(Есть, очень опасен)').addClass('danger');
	$('tr:contains(Есть, опасен)').addClass('warning');
	$('tr:contains(Есть, не опасен)').addClass('success');
	$('td').sortable();
});

var $spiders = new Array();

add('Вид','Пол','Яд','Линька','Дата последней линьки','Период между линьками');
add('Brachypelma Albopilosum', 'Female', 'Есть, не опасен', 'L12 -> L13', '28.05.2014', '1 год.');
add('Poecilotheria Ornata', 'Male', 'Есть, очень опасен', 'L7 -> L8');
add('Pterinochilus Murinus RCF', 'Female', 'Есть, очень опасен', 'L6 -> L7');
add('Pterinochilus Murinus RCF', 'Не определен', 'Есть, очень опасен', 'L7 -> L8', '19.07.2014', '3 мес.');
add('Nhandu Coloratovilosus', 'Female', 'Есть, не опасен', 'L7 -> L8', '30.07.2014', '4 мес.');
add('Nhandu Coloratovilosus', 'Male', 'Есть, не опасен', 'L5 -> L6');
add('Poecilotheria Miranda', 'Не определен', 'Есть, опасен', 'L2 -> L3');

function add(kind, gender, venom, moult, lastMoult, period) {
	var j = $spiders.length;
	$spiders[j] = new Object();
	$spiders[j].kind = kind;
	$spiders[j].gender = gender;
	$spiders[j].venom = venom;
	$spiders[j].moult = moult;
	$spiders[j].lastMoult = lastMoult;
	$spiders[j].period = period;
	if (!$spiders[j].lastMoult) {
		$spiders[j].lastMoult = '-';
	};
	if (!$spiders[j].period) {
		$spiders[j].period = '-';
	};
};