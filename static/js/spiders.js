$(document).ready(function() {
	$('#spiders').after('<h1>Hello</h1>');
	$('<tr><td>New TD</td></tr>').appendTo('table#spiders');
	$('#spiders').addClass('table table-bordered');
});