$(document).ready(function() {
	$setCountLi = document.getElementById('setCountLi');
	$setCountLiBtn = document.getElementById('setCountLiBtn');
	$result = document.getElementById('result');

	$setCountLiBtn.onclick = liResult;
});

var arr = ["[&Agr2LQEA]","[&AgL2LQEA]","[&AgP2LQEA]","[&AgT2LQEA]","[&AgX2LQEA]","[&Agb2LQEA]","[&Agf2LQEA]","[&Agj2LQEA]","[&Agn2LQEA]","[&Agr2LQEA]","[&Agv2LQEA]","[&Agz2LQEA]","[&Ag32LQEA]","[&Ag72LQEA]","[&Ag/2LQEA]","[&AhD2LQEA]","[&AhH2LQEA]","[&AhL2LQEA]","[&AhP2LQEA]","[&AhT2LQEA]","[&AhX2LQEA]","[&Ahb2LQEA]","[&Ahf2LQEA]","[&Ahj2LQEA]","[&Ahn2LQEA]","[&Ahr2LQEA]","[&Ahv2LQEA]","[&Ahz2LQEA]","[&Ah32LQEA]","[&Ah72LQEA]","[&Ah/2LQEA]","[&AiD2LQEA]","[&AiH2LQEA]","[&AiL2LQEA]","[&AiP2LQEA]","[&AiT2LQEA]","[37] - значение отсутствует"];

function liResult() {
	if (!parseString($setCountLi).length) {
		$result.innerHTML = 'Задайте значение';
		return;
	}

	var n = parseString($setCountLi) - 1;
	if (n >= arr.length) {
		$result.innerHTML = '<span class="glyphicon glyphicon-bold" aria-hidden="true"> - Banana тебе, а не ' + parseString($setCountLi) + ' инсайтов';
	} else {
		$result.innerHTML = arr[n];
	};
};

function parseString(elem) {
	elem.value = elem.value.replace(/^\s+|\s+$/g, '');
	return elem.value;
};