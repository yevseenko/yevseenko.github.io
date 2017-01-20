$(document).ready(function() {
    var $div = $('div.item'),
    	$totalNeed = $('#totalNeed'),
    	$totalSum = $('#totalSum'),
    
     	$nine = $('a[href|="#collapseOne"]'),
     	$eight = $('a[href|="#collapseTwo"]'),
     	$seven = $('a[href|="#collapseThree"]'),
     	$six = $('a[href|="#collapseFour"]'),
     	$five = $('a[href|="#collapseFive"]'),
     	$four = $('a[href|="#collapseSix"]'),
     	$three = $('a[href|="#collapseSeven"]'),
     	$two = $('a[href|="#collapseEight"]'),
    	$one = $('a[href|="#collapseNine"]');

    for (var i = 0; i < $div.length; i++) {
    	changeBg($div[i]);
    }

    $totalSum[0].innerHTML = 'Уже сдано: ' + current[0].totalCredit + ' ₴ (гривен)';
    $totalNeed[0].innerHTML = 'Еще необходимо сдать: ' + current[0].totalDebt + ' ₴ (гривен)';

    $nine[0].innerHTML = current[1].category + ' /// ' + '<b>Всего сдано:</b> ' + current[1].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[1].totalDebt + 'грн.';
	$eight[0].innerHTML = current[2].category + ' /// ' + '<b>Всего сдано:</b> ' + current[2].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[2].totalDebt + 'грн.';
	$seven[0].innerHTML = current[3].category + ' /// ' + '<b>Всего сдано:</b> ' + current[3].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[3].totalDebt + 'грн.'; 
	$six[0].innerHTML = current[4].category + ' /// ' + '<b>Всего сдано:</b> ' + current[4].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[4].totalDebt + 'грн.'; 
	$five[0].innerHTML = current[5].category + ' /// ' + '<b>Всего сдано:</b> ' + current[5].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[5].totalDebt + 'грн.'; 
	$four[0].innerHTML = current[6].category + ' /// ' + '<b>Всего сдано:</b> ' + current[6].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[6].totalDebt + 'грн.';
	$three[0].innerHTML = current[7].category + ' /// ' + '<b>Всего сдано:</b> ' + current[7].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[7].totalDebt + 'грн.';
	$two[0].innerHTML = current[8].category + ' /// ' + '<b>Всего сдано:</b> ' + current[8].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[8].totalDebt + 'грн.'; 
	$one[0].innerHTML = current[9].category + ' /// ' + '<b>Всего сдано:</b> ' + current[9].totalCredit + ' грн., <b>Осталось сдать:</b> ' + current[9].totalDebt + 'грн.'; 
});

var current = [
	{all: 0, totalDebt: 0, totalCredit: 0},
	{category: '9-й этаж', totalDebt: 0, totalCredit: 0},
	{category: '8-й этаж', totalDebt: 0, totalCredit: 0},
	{category: '7-й этаж', totalDebt: 0, totalCredit: 0},
	{category: '6-й этаж', totalDebt: 0, totalCredit: 0},
	{category: '5-й этаж', totalDebt: 0, totalCredit: 0},
	{category: '4-й этаж', totalDebt: 0, totalCredit: 0},
	{category: '3-й этаж', totalDebt: 0, totalCredit: 0},
	{category: '2-й этаж', totalDebt: 0, totalCredit: 0},
	{category: '1-й этаж', totalDebt: 0, totalCredit: 0}
	];

current[1].totalCredit = currentCredit($('div#collapseOne > div > div > div'));
current[2].totalCredit = currentCredit($('div#collapseTwo > div > div > div'));
current[3].totalCredit = currentCredit($('div#collapseThree > div > div > div'));
current[4].totalCredit = currentCredit($('div#collapseFour > div > div > div'));
current[5].totalCredit = currentCredit($('div#collapseFive > div > div > div'));
current[6].totalCredit = currentCredit($('div#collapseSix > div > div > div'));
current[7].totalCredit = currentCredit($('div#collapseSeven > div > div > div'));
current[8].totalCredit = currentCredit($('div#collapseEight > div > div > div'));
current[9].totalCredit = currentCredit($('div#collapseNine > div > div > div'));

current[1].totalDebt = currentDebt($('div#collapseOne > div > div > div'));
current[2].totalDebt = currentDebt($('div#collapseTwo > div > div > div'));
current[3].totalDebt = currentDebt($('div#collapseThree > div > div > div'));
current[4].totalDebt = currentDebt($('div#collapseFour > div > div > div'));
current[5].totalDebt = currentDebt($('div#collapseFive > div > div > div'));
current[6].totalDebt = currentDebt($('div#collapseSix > div > div > div'));
current[7].totalDebt = currentDebt($('div#collapseSeven > div > div > div'));
current[8].totalDebt = currentDebt($('div#collapseEight > div > div > div'));
current[9].totalDebt = currentDebt($('div#collapseNine > div > div > div'));

current[0].totalDebt = current[1].totalDebt + current[2].totalDebt + current[3].totalDebt + current[4].totalDebt + current[5].totalDebt+ current[6].totalDebt + current[7].totalDebt +current[8].totalDebt + current[9].totalDebt;
current[0].totalCredit = current[1].totalCredit + current[2].totalCredit + current[3].totalCredit + current[4].totalCredit + current[5].totalCredit + current[6].totalCredit + current[7].totalCredit + current[8].totalCredit + current[9].totalCredit;

function currentDebt(obj) {
	var totalDebt = 0;
	for (var i = 0; i < obj.length; i++) {
		var num = JSON.stringify(obj[i].innerHTML).split('<br>');
		var debt = parseInt(num[2].replace(/[^0-9]/g, ''));
		totalDebt += debt;
	};
	return totalDebt;
};

function currentCredit(obj) {
	var totalCredit = 0;
	for (var i = 0; i < obj.length; i++) {
		var num = JSON.stringify(obj[i].innerHTML).split('<br>');
		var credit = parseInt(num[1].replace(/[^0-9]/g, ''));
		totalCredit += credit;
	};
	return totalCredit;
};

function changeBg(elem) {
	var num = JSON.stringify(elem.innerHTML).split('<br>');
	num = parseInt(num[2].replace(/[^0-9]/g, ''));
	if (num == 1500) {
		$(elem).addClass('kill');
	} else if (num < 1500 && num != 0) {
		$(elem).addClass('proc');
	} else {
		$(elem).addClass('good');
	}
}