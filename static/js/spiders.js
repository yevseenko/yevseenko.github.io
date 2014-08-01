$(document).ready(function() {
	$('<tr><td>' + $alba.kind + '</td></tr>').appendTo('table#spiders');
	$('#spiders').addClass('table table-bordered').width('90%');
});

function spider(kind, gender, venom, moult, lastMoult, period) {
	this.kind = kind;
	this.gender = gender;
	this.venom = venom;
	this.moult = moult;
	this.lastMoult = lastMoult;
	this.period = period;
};

var $alba = new spider('Brachypelma Albopilosum','Female','Yes','13','19.05.2014','3');