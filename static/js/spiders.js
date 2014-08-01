$(document).ready(function() {
	$('#spiders').addClass('table table-bordered').width('90%');
	for(var i = 0; i < $spiders.length; i++) {
		$('<tr><td>'+$spiders[i].kind+'</td><td>'+$spiders[i].gender+'</td><td>'+$spiders[i].venom+'</td><td>'+$spiders[i].moult+'</td><td>'+$spiders[i].lastMoult+'</td><td>'+$spiders[i].period+'</td></tr>').appendTo('table#spiders');
	}
});

var $tr = "<tr></tr>";
var $td = "<td></td>";







var $spiders = new Array();

add('Brachypelma Albopilosum','Female','Yes','13','19.05.2014','3');
add('Murinus','Male','Yes','8','28.06.2014','5');








function add(kind, gender, venom, moult, lastMoult, period) {
	var j = $spiders.length;
	$spiders[j] = new Object();
	$spiders[j].kind = kind;
	$spiders[j].gender = gender;
	$spiders[j].venom = venom;
	$spiders[j].moult = moult;
	$spiders[j].lastMoult = lastMoult;
	$spiders[j].period = period;
};