'use strict';

(function () {
    var dayOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    var date = new Date();

    var cDay = date.getDay(),
        cHours = date.getHours(),
        cMinutes = date.getMinutes(),
        cSeconds = date.getSeconds();
    
    function addZero(num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }

    document.getElementById('basic-one').innerHTML = 'Сегодня: ' + dayOfWeek[cDay] + ' Текущее время: ' + addZero(cHours) + ':' + addZero(cMinutes) + ':' + addZero(cSeconds);
}());

(function () {
    var date = new Date();

    var cDate = date.getDate(),
        cMonth = date.getMonth(),
        cYear = date.getFullYear();
    
    function addZero(num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }

    document.getElementById('basic-two').innerHTML = addZero(cDate) + '.' + addZero(cMonth) + '.' + cYear;
}());