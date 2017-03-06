'use strict';

(function() {
    var list = document.querySelector('ol'),
        input = document.querySelector('input');

    list.addEventListener('click', function(e) {
        if (e.target.classList.contains('todo-item')) {
            e.target.classList.toggle('completed');
        }
    });

    input.addEventListener('keypress', function(e) {
        if (e.keyCode === 13 && input.value) {
            list.innerHTML += '<li class="todo-item">' + input.value + ' ' + dateString() + '</li>';
            input.value = '';
        }
    });

    function dateString() {
        var date = new Date(),
            seconds = date.getSeconds(),
            minutes = date.getMinutes(),
            hours = date.getHours();

        return '[' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ']';
    }

    function addZero(n) {
        return n < 10 ? n = "0" + n : n;
    }
}());

var obj = {
    method: function hello() {
        return 'hello';
    }
}
