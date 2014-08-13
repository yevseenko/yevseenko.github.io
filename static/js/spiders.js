$(document).ready(function() {
	$('#spiders').addClass('table table-bordered');
	for(var i = 0; i < $spiders.length; i++) {
		$('<tr><td>'+i+'</td><td>'+$spiders[i].kind+'</td><td>'+$spiders[i].types+'</td><td>'+$spiders[i].character+'</td><td>'+$spiders[i].gender+'</td><td>'+$spiders[i].venom+'</td><td>'+$spiders[i].sizes+'</td><td>'+$spiders[i].moult+'</td><td>'+$spiders[i].lastMoult+'</td><td>'+$spiders[i].period+'</td></tr>').appendTo('table#spiders');
	};
	$('tr:contains(Есть, очень опасен)').addClass('danger');
	$('tr:contains(Есть, опасен)').addClass('warning');
	$('tr:contains(Есть, не опасен)').addClass('success');
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
});

var $spiders = new Array();

add('Вид','Тип','Характер','Пол','Яд','Max. размер','Линька','Дата L ->','Период L');
add('Brachypelma Albopilosum', 'Наземный', 'Спокойный', 'Female', 'Есть, не опасен', 'До 17см.', 'L12 -> L13', '28.05.2014', '1 год.');
add('Poecilotheria Ornata', 'Древесный', 'Агрессивный', 'Male', 'Есть, очень опасен', 'До 24см.', 'L7 -> L8');
add('Pterinochilus Murinus RCF', 'Древесный', 'Агрессивный', 'Female', 'Есть, очень опасен', 'До 18см.', 'L7 -> L8', '8.08.2014', '2 мес.');
add('Pterinochilus Murinus RCF', 'Древесный', 'Агрессивный', 'Не определен', 'Есть, очень опасен','До 18см.', 'L7 -> L8', '19.07.2014', '3 мес.');
add('Nhandu Coloratovillosus', 'Наземный', 'Нервный', 'Female', 'Есть, не опасен', 'До 20см.', 'L7 -> L8', '30.07.2014', '4 мес.');
add('Nhandu Coloratovillosus', 'Наземный', 'Нервный', 'Male', 'Есть, не опасен', 'До 20см.', 'L5 -> L6');
add('Poecilotheria Miranda', 'Древесный', 'Агрессивный', 'Не определен', 'Есть, опасен', 'До 21см.', 'L2 -> L3');

function add(kind, types, character, gender, venom, sizes, moult, lastMoult, period) {
	var j = $spiders.length;
	$spiders[j] = new Object();
	$spiders[j].kind = kind;
	$spiders[j].types = types;
	$spiders[j].character = character;
	$spiders[j].gender = gender;
	$spiders[j].venom = venom;
	$spiders[j].sizes = sizes;
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