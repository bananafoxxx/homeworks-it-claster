// classwork

// 1. Порівняти 2 рядки без урахування регістру.

const str1 = 'MARINA';
const str2 = 'marina';
console.log(str1.toLowerCase() === str2.toLowerCase());


// 2. Зробити з заданого рядка - масив. “Морква, картопля,
//     буряк”.

const myArr = 'Морква, картопля, буряк';
console.log(myArr.split(', '));


// 3. Емуляція гри в кубики, юзер клацає на конфірм та отримує
// 2 результати (кубики стандартні 1-6 значення на них.)
// Якщо випадає 2 шестірки , вивести додаткове повідомлення
// що це - джекпот!

const max = 6;
const min = 1;
const myFirstCube = (Math.floor(Math.random() * (max - min + 1)) + min);
const mySecondCube = (Math.floor(Math.random() * (max - min + 1)) + min);
alert('Бросьте кубики!');
alert(myFirstCube + ' and ' + mySecondCube);
if (myFirstCube === 6 && mySecondCube === 6) {
  alert( 'Джекпот!');
}


// 4. Створіть програму яка запитує у юзера 2 значення та
// виводить рандомно число між цими 2 значеннями.

const myNum1 = prompt('Введите первое значение:');
const myNum2 = prompt('Введите второе значение:');
const myMaxNum = Math.max(myNum1,myNum2);
const myMinNum = Math.min(myNum1,myNum2);
alert((Math.floor(Math.random() * (myMaxNum - myMinNum) + myMinNum)));


//
// 5. Створити масив у якому буде 3 юзера описані як обєкти з
// такими полями - age, name, hobby (теж повинно бути
// масивом ).

const myObjUser1 = {age: 11, name: 'Qwe', hobby: ['ski', 'art']};
const myObjUser2 = {age: 21, name: 'Rty', hobby: []};
const myObjUser3 = {age: 31, name: 'Uio', hobby: ['swimming']};
const myArr = [myObjUser1, myObjUser2, myObjUser3];
console.log(myArr);




// homework

// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent),
// золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined.
//
const money = prompt('Cкільки у вас є гривень: ');
if ((money === null) || (money === undefined) || (money <= 0)) {
  alert('Неможливо виконати');
}
const currency  = prompt('В яку валюту хочете конвертувати: dollar/euro/brent/gold: ');
if (currency === 'dollar') {
  alert (money / 28);
}
if (currency === 'euro') {
  alert (money / 33);
}
if (currency === 'brent') {
  alert (money / 1730);
}
if (currency === 'gold') {
  alert (money / 1600);
}


// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %,
// від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок!

const sum = prompt('Сума замовлення: ');
if (sum < 500 && sum > 1) {
  alert( `Cума до сплати:  ${sum * 0.99} грн` );
}
if (sum >= 500 && sum < 1000) {
  alert( `Cума до сплати:  ${sum * 0.95} грн` );
}
if (sum >= 1000 ) {
  alert( `Cума до сплати:  ${sum * 0.9} грн та сертифікат на 200 гривень у подарунок!` );
}


//
//     4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал,
//     якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал.

let score = 0;

let answer1 = prompt ('Скiльки нiг у горобця?');
if (answer1 === '2') {
  score += 1
}

let answer2 = prompt ('Скiльки нiг у пiвтора горобця?');
if (answer2 === '3') {
  score += 1
}

let answer3 = prompt ('Скiльки нiг у кiшки?');
if (answer3 === '2') {
  score += 1
}

let answer4 = prompt ('А рук?');
if (answer4 === '2') {
  score += 1
}

let answer5 = prompt ('Коли я вже вивчу той клятий JS?');
if (answer5 === 'Та вже скоро') {
  score += 1
}

if (score === 5) {
  score +=1;
}
alert(score);


// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри
//
const myNum = prompt('введiть 3-значне число');
const myString = String(myNum);
if (
    (myString.indexOf(myString[0], 1) !== -1)
    || (myString.indexOf(myString[1], 2) !== -1)
) {
  alert('є однакові цифри!');
}


// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.
const myButton = prompt('введiть шось вiд 1 до =');
if (myButton == 1) {
  alert('!')
}

if (myButton == 2) {
  alert('@')
}

if (myButton == 3) {
  alert('#')
}

if (myButton == 4) {
  alert('$')
}

if (myButton == 5) {
  alert('%')
}

if (myButton == 6) {
  alert('^')
}

if (myButton == 7) {
  alert('&')
}

if (myButton == 8) {
  alert('*')
}

if (myButton == 9) {
  alert('(')
}

if (myButton == 0) {
  alert(')')
}

if (myButton == '-') {
  alert('_')
}

