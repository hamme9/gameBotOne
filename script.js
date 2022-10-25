'use strict';

const randomNumber = getRandomInt(100);
console.log(randomNumber);

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num[0] != ' ' && num.slice(-1) != ' ' && num >= 0;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const gameBot = function(x) {
    function count() {
        const number = prompt('Угадай число от 1 до 100');
        switch(true) {
            case number === null:
                alert('Игра окончена');
                break;
            case number == x:
                alert('Поздравляю, Вы угадали!!!');
                break;
            case !isNumber(number):
                alert('Введи число!');
                console.log(number);
                return count();
            case number < x:
                alert('Загаданное число больше');
                console.log(number);
                return count();
            case number > x:
                alert('Загаданное число меньше');
                console.log(number);
                return count();
        }
    }
    count();
};

gameBot(randomNumber);