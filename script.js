'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num[0] != ' ' && num.slice(-1) != ' ' && num >= 0;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const gameBot = function() {
    const x = getRandomInt(100);
    console.log(x);
    function count() {
        const number = prompt('Угадай число от 1 до 100');
        switch(true) {
            case number === null:
                alert('Игра окончена');
                return null;
            case number == x:
                alert('Поздравляю, Вы угадали!!!');
                return x;
            case !isNumber(number):
                alert('Введи число!');
                console.log(number);
                break;
            case number < x:
                alert('Загаданное число больше');
                console.log(number);
                break;
            case number > x:
                alert('Загаданное число меньше');
                console.log(number);
                break;
        }
        count();
    }
    count();
};

gameBot();