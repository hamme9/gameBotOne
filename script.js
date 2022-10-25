'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num[0] != ' ' && num.slice(-1) != ' ' && num >= 0;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const gameBot = function() {
    const x = getRandomInt(100);
    let k = 10;
    function count() {
        console.log(x);
        const number = prompt('Угадай число от 1 до 100');
        k--;
        switch(k > 0) {
            case number === null:
                alert('Игра окончена');
                return null;
            case number == x:
                const restart = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                if (restart) {
                    gameBot();
                }
                return number;
            case !isNumber(number):
                alert('Введи число!');
                console.log(number);
                break;
            case number < x:
                alert('Загаданное число большеь, осталось попыток - ' + k);
                console.log(number);
                break;
            case number > x:
                alert('Загаданное число меньшеосталось попыток - ' + k);
                console.log(number);
                break;
            default: 
            const newTry = confirm('Попытки закончились, хотите сыграть еще?');
            if (newTry) {
                gameBot();
            }
        }
        count();
        // return k;
    }
    count();
    // return x;
};

gameBot();