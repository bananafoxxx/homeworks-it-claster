// classwork

// 1. Порівняти 2 рядки без урахування регістру.

let str1 = 'MARINA';
let str2 = 'marina';
console.log(str1.toLowerCase() === str2.toLowerCase());


// 2. Зробити з заданого рядка - масив. “Морква, картопля,
//     буряк”.

let myArr = 'Морква, картопля, буряк';
console.log(myArr.split(', '));


// 3. Емуляція гри в кубики, юзер клацає на конфірм та отримує
// 2 результати (кубики стандартні 1-6 значення на них.)
// Якщо випадає 2 шестірки , вивести додаткове повідомлення
// що це - джекпот!

let max = 6;
let min = 1;
let myFirstCube = (Math.floor(Math.random() * (max - min + 1)) + min);
let mySecondCube = (Math.floor(Math.random() * (max - min + 1)) + min);
alert('Бросьте кубики!');
alert(myFirstCube + ' and ' + mySecondCube);
if (myFirstCube === 6 && mySecondCube === 6) {
  alert( 'Джекпот!');
}


// 4. Створіть програму яка запитує у юзера 2 значення та
// виводить рандомно число між цими 2 значеннями.

let myNum1 = prompt('Введите первое значение:');
let myNum2 = prompt('Введите второе значение:');
let myMaxNum = Math.max(myNum1,myNum2);
let myMinNum = Math.min(myNum1,myNum2);
alert((Math.floor(Math.random() * (myMaxNum - myMinNum) + myMinNum)));


//
// 5. Створити масив у якому буде 3 юзера описані як обєкти з
// такими полями - age, name, hobby (теж повинно бути
// масивом ).

let myObjUser1 = {age: 11, name: 'Qwe', hobby: ['ski', 'art']};
let myObjUser2 = {age: 21, name: 'Rty', hobby: []};
let myObjUser3 = {age: 31, name: 'Uio', hobby: ['swimming']};
let myArr = [myObjUser1, myObjUser2, myObjUser3];
console.log(myArr);
