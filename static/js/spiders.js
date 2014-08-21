$(document).ready(function() {
	
	var $info = $('#info');
	var $key = $('#key');
	var $filter = $('#key~div a');
	var $modal = $('#modal_window');
	var $modalImg = $('div.modal-content img');

	for(var i = 0; i < $spiders.length; i++) {
		$('<tr><td>'+i+'</td><td class="col-xs-3"><img style="cursor: pointer" src="'+$spiders[i].img+'" height="16px" width="21px"> '+$spiders[i].kind+'</td><td>'+$spiders[i].types+'</td><td>'+$spiders[i].character+'</td><td>'+$spiders[i].gender+'</td><td>'+$spiders[i].venom+'</td><td>'+$spiders[i].sizes+'</td><td>'+$spiders[i].moult+'</td><td>'+$spiders[i].lastMoult+'</td><td>'+$spiders[i].period+'</td></tr>').appendTo('table#spiders');
	};

	var $tr = $('tr');
	var $tableImg = $('#spiders img');

	$('tr:contains("Очень опасен")').addClass('danger');
	$('tr:contains("Опасен")').addClass('warning');
	$('tr:contains("Не опасен")').addClass('success');
	$key.on('input', function() {
		$('tr:not(:contains('+ $(this).val() +'))').hide();
		$('tr:contains('+ $(this).val() +')').show('slow');
		$info.text($(this).val());
	});
	$filter.on('click', function() {
		$tr.hide();
        $('tr:contains('+ $(this).text() +')').show('slow');
        $info.text($(this).text());
    });
	$('#showAll').on('click', function() {
		$tr.show('slow');
		$info.text('пусто');
	});
	$tableImg.on('mouseover', function() {
		$modalImg.attr('src', $(this).prop('src'));
	});
	$tableImg.on('mousedown', function() {
		$modal.modal();
		$modal.on('click', function() {
			$modal.modal('hide');
		});
	});
	$tableImg.tooltip({
		'trigger':'hover',
		'container':'body',
		'placement':'top',
		'title':'Показать изображение'
	});
});

var $spiders = new Array();

add('Вид','Тип','Характер','Пол','Яд','Max. размер','Линька','Дата L ->','Период L','../static/img/tarantulas.jpg');
add('Brachypelma Albopilosum','Наземный','Спокойный','Female','Не опасен','До 16см.','L12 -> L13','28.05.2014','1 год.','../static/img/brachypelma_albopilosum.jpg');
add('Poecilotheria Ornata','Древесный','Агрессивный','Male','Очень опасен','До 24см.','L8 -> L9','15.08.2014','4 мес.','../static/img/poecilotheria_ornata.jpg');
add('Pterinochilus Murinus RCF','Древесный','Агрессивный','Female','Очень опасен','До 18см.','L7 -> L8','8.08.2014','2 мес.','../static/img/pterinochilus_murinus_rcf.jpg');
add('Pterinochilus Murinus RCF','Древесный','Агрессивный','Не определен','Очень опасен','До 18см.','L7 -> L8','19.07.2014','3 мес.','../static/img/pterinochilus_murinus_rcf.jpg');
add('Nhandu Coloratovillosus','Наземный','Нервный','Female','Не опасен','До 20см.','L7 -> L8','30.07.2014','4 мес.','../static/img/nhandu_coloratovillosus.jpg');
add('Nhandu Coloratovillosus','Наземный','Нервный','Male','Не опасен','До 20см.','L5 -> L6','','','../static/img/nhandu_coloratovillosus.jpg');
add('Poecilotheria Miranda','Древесный','Спокойный','Не определен','Опасен','До 21см.','L2 -> L3','','','../static/img/poecilotheria_miranda.jpg');
add('Davus Fasciatus','Норной','Нервный','Не определен','Не опасен','До 12см.','L1','','','../static/img/davus_fasciatus.jpg');

function add(kind, types, character, gender, venom, sizes, moult, lastMoult, period, img) {
	var j = $spiders.length;
	$spiders[j] = new Object();
	$spiders[j].kind = kind;
	if (!$spiders[j].kind) {
		$spiders[j].kind = 'Вид неизвестен';
	};
	$spiders[j].types = types;
	if (!$spiders[j].types) {
		$spiders[j].types = 'Тип не определен';
	};
	$spiders[j].character = character;
	if (!$spiders[j].character) {
		$spiders[j].character = 'Неизвестен';
	};
	$spiders[j].gender = gender;
	if (!$spiders[j].gender) {
		$spiders[j].gender = 'Не определен';
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
	$spiders[j].img = img;
	if (!$spiders[j].img) {
		$spiders[j].img = '../static/img/tarantulas.jpg';
	};
};