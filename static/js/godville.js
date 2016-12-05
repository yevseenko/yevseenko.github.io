$(document).ready(function() {
	var $martial_glases = $('#martial_glases'),
	$offline_glases = $('#offline_glases'),
	$prana_glases = $('#prana_glases'),
	$surprise_glases = $('#surprise_glases'),
	$back_glases = $('#back_glases');

	$martial_glases.text(martial_glases[martial_rand()]);
	$martial_glases.on('click', function() {
		$martial_glases.text(martial_glases[martial_rand()]);
	});
});

var martial_glases = ['Твой бог – сильнейший из богов! Услышь мой глас! Без очереди бей сейчас!', 'За нас, сражайся, стукни в глаз! Бей сильно – это мой приказ!', 'Ударь врага двумя ногами! И помни – зло стоит за нами! Лупи же днями и часами!', 'С размаху бей во имя бога! Лупи его, как злобный йога!', 'С тобою стая злобных сов! Кусай как жуткий соволов!', 'Бей дважды, бей без лишних слов!', 'Бей по домашнему! Дерись! Ударь два раза, не стыдись!', 'Собрав всех ежиков в кулак, ударь противника в чердак!', 'Слушай строгий мой приказ : Бей вражину между глаз!', 'Бей вражину прямо в глаз, пусть страдает, тридвараз!', 'Мой герой, не унывай! Слева в печень пробивай!', ' Бей! Сделай больно молодцу – бей ногами по лицу!', 'Шея, пах, глаза и почки! Бей врага в больные точки!', 'Чтобы монстра победить, надо посильнее бить!', 'Бей! Бей тихонько, аккуратно, тихо чинно и опрятно!', 'Бей врага прямо в нос, пусть узнает, кто здесь босс!', 'Убей монстра! И не стыдись!', 'О Vo1d мой, услышь меня! Вне очереди бей! Пусть враг узнает силу мысли!', 'Убей врага и будь таков! Без лишних слов во имя бога своего о верный Vo1d!', 'Во имя Всемогущего о Vo1d, ударь вне очереди сильно! Пусть враг умрет! Падет к ногам!'];
var offline_glases = ['Дитя мое, ты слишком часто мрешь. Задолбало, веришь?', 'Я ухожу, смотри не здохни!'];
var prana_glases = ['Дитя моё, отправляю тебе код активации праны, не поленись, помолись!', 'Для активации молитвы отправьте смс на номер жертвенного алтаря в Вашем храме'];
var surprise_glases = ['Копай молча, не ленись, найдешь клад - поторопись, мобы нынче злые ходят - разорвут на живопись!'];
var back_glases = ['Возвращайся в город, пока оставшиеся три ноги не поломали...'];

function martial_rand() {
	var min = 0, max = martial_glases.length;
	var rand = min + Math.random() * (max + 1 - min);
	rand = rand^0;
	return rand;
};

function prana_rand() {
	var min = 0, max = prana_glases.length;
	var rand = min + Math.random() * (max + 1 - min);
	rand = rand^0;
	return rand;
};

function offline_rand() {
	var min = 0, max = offline_glases.length;
	var rand = min + Math.random() * (max + 1 - min);
	rand = rand^0;
	return rand;
};

function surprise_rand() {
	var min = 0, max = surprise_glases.length;
	var rand = min + Math.random() * (max + 1 - min);
	rand = rand^0;
	return rand;
};