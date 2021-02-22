
// homework-3

// 1.  Знайдіть суму всіх цифр від 1 до 100.

let sum = 0;
for ( let i = 1; i<= 100; i++) {
    sum += i;
}
alert(sum);




// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
const myArr = [1, 2, 3, 4, 5];
for ( let i=0; i < myArr.length; i++) {
    alert (myArr[i]);
}


// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
const myArr1 = [-1, 22, 3, 44, 5];
let myMaxNumber = -Infinity;
for ( let i=0; i < myArr1.length; i++) {
    const myValue = myArr1[i];
  if (myMaxNumber < myValue) {
      myMaxNumber = myValue;
  }
}
alert(myMaxNumber);



// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран.
// Також досмтатньо тільки 1 змінної для отримання даних від юзера.
let myPositive = 0;
let myNegative = 0;
let myZero = 0;
for ( let i=0; i < 8; i++ ) {
    const myValue1 = prompt( 'Введiть число: ')
    if (myValue1 > 0) {
        myPositive++;
    }
    if (myValue1 < 0) {
        myNegative++;
    }
    if (myValue1 == 0) {
        myZero++;
    }
}
alert(`кiлькiсть додатних: ${myPositive} кiлькiсть відємних: ${myNegative} кiлькiсть нулів: ${myZero}`);


// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

for (let i=1; i < 9; i++) {
    const myMult = i * 8;
    alert(`${i} * 8 = ${myMult}`);
}


// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора
// if вивести на екран цифри, які більше 3-х, але менше 10.

const myArr2 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < myArr2.length; i++) {
    if (myArr2[i] > 3 && myArr2[i] < 10) {
        alert(myArr2[i]);
    }
}

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак ,
// провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?



let myContinue = true;

do {
    const  myNum1 = prompt(`введiть перше число: `);
    const  myNum2 = prompt(`введiть друге число: `);
    const  mySign = prompt(`введiть знак: `);

    if (mySign == '+') {
        alert(parseInt(myNum1) + parseInt(myNum2))
    }
    if (mySign == '-') {
        alert(parseInt(myNum1) - parseInt(myNum2))
    }
    if (mySign == '*') {
        alert(parseInt(myNum1) * parseInt(myNum2))
    }
    if (mySign == '/') {
        alert(parseInt(myNum1) / parseInt(myNum2))
    }
    const userAnswer = prompt('Продовжити? yes/no');

    if (userAnswer == 'no') {
        myContinue = false;
    }
} while (myContinue)
