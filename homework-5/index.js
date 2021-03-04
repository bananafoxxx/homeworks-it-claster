'use strict'

// 1. Напишіть функцію, що повертає куб числа.
//
function calculateCube(myNumber) {
    const myCube = myNumber ** 3;
    return myCube;
}

console.log(calculateCube(3));

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.
//
function calculateExpression(num1, num2, num3) {
    const result = (num1 + num2) / num3;
    return result;
}

console.log(calculateExpression(2, 2, 5));


// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
//
function getDayByNum(dayNum) {
    switch (dayNum) {
        case 1:
            return 'Понедiлок';
        case 2:
            return 'Вiвторок';
        case 3:
            return 'Cереда';
        case 4:
            return 'Четвер';
        case 5:
            return "П'ятниця";
        case 6:
            return 'Субота';
        case 7:
            return 'Недiля';

    }
}

console.log(getDayByNum(3));

// 4. Реалізуйте функцію знаходження факторіала

function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(getFactorial(5));

// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.
//
function getSeconds(hh, mm, ss) {
    const result = (3600 * hh + 60 * mm + ss);
    return result;
}

console.log(getSeconds(1, 20, 59));

// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
// якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".
//
function getTimeFromSeconds(seconds) {
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds / 60) - hh * 60);
    const ss = seconds % 60;

    const time =
        ` ${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")} `

    const secondsPerDay = 24 * 3600;

    return seconds < secondsPerDay ? time : "Більше одного дня";
};

console.log(getTimeFromSeconds(346986));

// 7. 4 відмінності ерров фанкшина від звичайної функції.
// -нет собсвтенного this (ссылается на this внешней функции)
// -не может быть использована для создания объектов
// -не имеет массива arguments (можно использовать деструктуризацию)
// -при использовании одной инструкции, можно использовать неявный return, (без использования самого ключевого слова return)


