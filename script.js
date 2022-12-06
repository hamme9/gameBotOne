'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num[0] != ' ' && num.slice(-1) != ' ' && num >= 0;
};

function getRandomInt(max) {
    let num = Math.floor(Math.random() * max);
    if (num == 0) { 
        num = 100;
      }
    return num
}

const gameBot = function() {
    const x = getRandomInt(100);
    console.log(x);
    let k = 10;
    function count() {
        console.log(x);
        const number = prompt('Угадай число от 1 до 100');
        k--;
        switch(k > 0) {
            case number === 0:
                const reTry = confirm('Попытки закончились, хотите сыграть еще?');
                if(reTry) {
                    console.clear();
                    gameBot();
                }
                return null;
            case number === null:
                confirm('Игра окончена');
                console.clear();
                return null;
            case number == x:
                const restart = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                if (restart) {
                    console.clear();
                    gameBot();
                }
                return number;
            case !isNumber(number):
                alert('Введи число!');
                console.log(number);
                break;
            case number < x:
                alert('Загаданное число больше, осталось попыток - ' + k);
                console.log(number);
                break;
            case number > x:
                alert('Загаданное число меньше, осталось попыток - ' + k);
                console.log(number);
                break;
            default: 
            const newTry = confirm('Попытки закончились, хотите сыграть еще?');
            if (newTry) {
                console.clear();
                gameBot();
            }
        }
        count();
    }
    count();
};

gameBot();