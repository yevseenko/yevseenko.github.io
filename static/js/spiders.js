$(document).ready(function() {
	$('#spiders').addClass('table table-bordered');
	for(var i = 0; i < $spiders.length; i++) {
		$('<tr><td>'+i+'</td><td>'+$spiders[i].kind+'</td><td>'+$spiders[i].types+'</td><td>'+$spiders[i].character+'</td><td>'+$spiders[i].gender+'</td><td>'+$spiders[i].venom+'</td><td>'+$spiders[i].sizes+'</td><td>'+$spiders[i].moult+'</td><td>'+$spiders[i].lastMoult+'</td><td>'+$spiders[i].period+'</td></tr>').appendTo('table#spiders');
	};
	$('tr:contains("Очень опасен")').addClass('danger');
	$('tr:contains("Опасен")').addClass('warning');
	$('tr:contains("Не опасен")').addClass('success');
	$('#key').on('input', function() {
		var $key = $(this).val();
		$('tr:not(:contains('+ $key +'))').hide('slow');
		$('tr:contains('+ $key +')').show('slow');
	});
	$('tr:contains("Brachypelma Albopilosum")').on('click', function() {
		$('#brachypelma_albopilosum').modal();
	});
	$('tr:contains("Poecilotheria Ornata")').on('click', function() {
		$('#poecilotheria_ornata').modal();
	});
	$('tr:contains("Pterinochilus Murinus RCF")').on('click', function() {
		$('#pterinochilus_murinus_rcf').modal();
	});
	$('tr:contains("Nhandu Coloratovillosus")').on('click', function() {
		$('#nhandu_coloratovillosus').modal();
	});
	$('tr:contains("Poecilotheria Miranda")').on('click', function() {
		$('#poecilotheria_miranda').modal();
	});
	$('#key~div ul li a').on('click', function() {
		var $keyz = $(this).text();
		$('tr:not(:contains('+ $keyz +'))').hide('slow');
	});
	$('#showAll').on('click', function() {
		$('tr').show('slow');
	});
});

var $spiders = new Array();

add('Вид','Тип','Характер','Пол','Яд','Max. размер','Линька','Дата L ->','Период L');
add('Brachypelma Albopilosum', 'Наземный', 'Спокойный', 'Female', 'Не опасен', 'До 16см.', 'L12 -> L13', '28.05.2014', '1 год.');
add('Poecilotheria Ornata', 'Древесный', 'Агрессивный', 'Male', 'Очень опасен', 'До 24см.', 'L7 -> L8');
add('Pterinochilus Murinus RCF', 'Древесный', 'Агрессивный', 'Female', 'Очень опасен', 'До 18см.', 'L7 -> L8', '8.08.2014', '2 мес.');
add('Pterinochilus Murinus RCF', 'Древесный', 'Агрессивный', 'Не определен', 'Очень опасен','До 18см.', 'L7 -> L8', '19.07.2014', '3 мес.');
add('Nhandu Coloratovillosus', 'Наземный', 'Нервный', 'Female', 'Не опасен', 'До 20см.', 'L7 -> L8', '30.07.2014', '4 мес.');
add('Nhandu Coloratovillosus', 'Наземный', 'Нервный', 'Male', 'Не опасен', 'До 20см.', 'L5 -> L6');
add('Poecilotheria Miranda', 'Древесный', 'Спокойный', 'Не определен', 'Опасен', 'До 21см.', 'L2 -> L3');
add('','Древесный','Спокойный','Не определен','Не опасен','','','','');

function add(kind, types, character, gender, venom, sizes, moult, lastMoult, period) {
	var j = $spiders.length;
	$spiders[j] = new Object();
	$spiders[j].kind = kind;
	if (!$spiders[j].kind) {
		$spiders[j].kind = '-';
	};
	$spiders[j].types = types;
	if (!$spiders[j].types) {
		$spiders[j].types = '-';
	};
	$spiders[j].character = character;
	if (!$spiders[j].character) {
		$spiders[j].character = '-';
	};
	$spiders[j].gender = gender;
	if (!$spiders[j].gender) {
		$spiders[j].gender = '-';
	};
	$spiders[j].venom = venom;
	if (!$spiders[j].venom) {
		$spiders[j].venom = '-';
	};
	$spiders[j].sizes = sizes;
	if (!$spiders[j].sizes) {
		$spiders[j].sizes = '-';
	};
	$spiders[j].moult = moult;
	if (!$spiders[j].moult) {
		$spiders[j].moult = '-';
	};
	$spiders[j].lastMoult = lastMoult;
	if (!$spiders[j].lastMoult) {
		$spiders[j].lastMoult = '-';
	};
	$spiders[j].period = period;
	if (!$spiders[j].period) {
		$spiders[j].period = '-';
	};
};