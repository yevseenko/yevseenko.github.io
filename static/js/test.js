'use strict';

var list = document.querySelector('#list'),
	input = document.querySelector('input');

list.addEventListener('click', function(e){
	if (e.target.classList.contains('todo-item')) {
		e.target.classList.toggle('completed');
	}
});

input.addEventListener('keypress', function(e) {
	if (e.keyCode === 13 && input.value) {
		list.innerHTML += '<li class="todo-item">' + input.value + '</li>';
		input.value = '';
	}
});