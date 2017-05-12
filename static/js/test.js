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

(function () {
    var a = 5,
        b = 6,
        c = 7;

    var p = (a + b + c) / 2;

    var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    document.getElementById('basic-three').innerHTML = area;
}());



(function () {
    var str = 'Hello World ';

    setInterval(function () {
        var sub = str.slice(-1);
        str = sub.concat(str.slice(0, str.length - 1));

        document.getElementById('basic-four').innerText = str;
    }, 300);

}());

(function () {

}());
