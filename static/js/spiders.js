$(document).ready(function() {
	$('#spiders').addClass('table table-bordered').width('95%');
	$('<tr><td>' + $alba.kind + '</td></tr>').appendTo('table#spiders');
});

var $tr = "<tr></tr>";
var $td = "<td></td>";








var $alba = new spider('Brachypelma Albopilosum','Female','Yes','13','19.05.2014','3');









function spider(kind, gender, venom, moult, lastMoult, period) {
	this.kind = kind;
	this.gender = gender;
	this.venom = venom;
	this.moult = moult;
	this.lastMoult = lastMoult;
	this.period = period;
};