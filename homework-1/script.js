'use strict';

//Classwork

// 1. Додати 2 скрипта на сторінку (напряму в тегу script та підключіть джс
// фаїл) , у кожному з скриптів виведіть алерт з хеллов ворлд текстом.
alert('Hello, World!');


// 2. Додати 2 повідомлення “Я люблю фронтенд” та “Я люблю JS”
alert('Я люблю фронтенд');
alert('Я люблю JS');


// 3. Оголошуємо змінні: admin и name. Запишіть в name Ваше імя.В admin
// запишіть – undefined. Переприсвойте name в admin. Введіть admin . Що
// буде?
let name =  'Marina';
let admin = undefined;
admin = name;
alert(admin);


// 4. Запитати в юзера його імя, додати до імені – “Батькович” та вивести
// його на екран
let name1 = prompt('Ваше імя:');
alert(`${name1} Батьковна`);

// 5. Undefined, e is not defined. Спробуємо вивести оголошену але не
// присвоєну змінну.
let e;
alert(e);



//Homework

// 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».
let age = prompt('Скільки вам років:');
alert(`«Привіт мені - ${age} років!»`);


// 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу.
//     Виведемо скільки йому років.
let age1 = prompt(' Якого ти року народження:');
alert(`Вам стільки років: ${2021 - age1}`);


// 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.
let sideLenghtA = prompt(' Довжина сторони А: ');
let sideLenghtB = prompt(' Довжина сторони В: ');
alert(`Периметр прямокутника становить: ${(parseInt(sideLenghtA) + parseInt(sideLenghtB)) * 2}`);


// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)
let circle_rad = prompt('Обери радіус кола:');
alert(`Площа кола становить: ${Math.PI * circle_rad **2}`);


// 5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще
// йому необхідно часу їхати, та виведіть відстань.
let time = prompt('Скільки годин ще необхідно їхати:');
alert(`Відстань: ${time * 50} км`);


// 6. Реалізуємо конвертер кілометрів в милі і навпаки =)
//  km = mile * 1.61;

// Конвертер км в мили:
let km = prompt('Кiлькiсть км що треба конвертувати: ');
alert(`Це ${km * 1.61} миль`);

// Конвертер миль в км:
let mile = prompt('Кiлькiсть миль що треба конвертувати: ');
alert(`Це ${mile / 1.61} км`);


// 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо
// скільки бензину він може купити та скільки грошей у нього залишиться.
let money = prompt('Коштів на картці: ');
let price = prompt('Ціна одного літра бензину: ');
alert(`Cтільки бензину ти зможеш купити: ${Math.trunc(money / price)}, i ось стільки грошей тебе залишиться: ${ money % price } `);