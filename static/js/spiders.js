$(document).ready(function() {
	$('#spiders').addClass('table table-bordered').width('95%');
	$('<tr><td>' + $spiders[0].kind + '</td></tr>').appendTo('table#spiders');
});

var $tr = "<tr></tr>";
var $td = "<td></td>";







var $spiders = [];
add('Brachypelma Albopilosum','Female','Yes','13','19.05.2014','3');









function add(kind, gender, venom, moult, lastMoult, period) {
	var j = $spiders.length;
	if (j === undefined) {
		j = 0;
	} else {
		j = $spiders.length
	}
	$spiders[j].kind = kind;
	$spiders[j].gender = gender;
	$spiders[j].venom = venom;
	$spiders[j].moult = moult;
	$spiders[j].lastMoult = lastMoult;
	$spiders[j].period = period;
};