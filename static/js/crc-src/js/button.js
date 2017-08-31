$(document).ready(function(){
	$hello = document.getElementById('hello');
	$hello.onclick = hello;
});

function hello() {
	$hello.innerHTML = "Hello there! =)";
};