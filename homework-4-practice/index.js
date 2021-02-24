// Write a JavaScript program which compute, the average marks of the following students
// Then, this average is used to determine the corresponding grade.

const myArr = [80, 77, 68, 88, 95];
let mySum = 0;
for (let i = 0; i < myArr.length; i++) {
   mySum +=myArr[i];
}
let myAverage = mySum / myArr.length;

// if (myAverage < 60) {
//     alert(`F`);
// } else if (myAverage < 70) {
//     alert(`D`);
// } else if
// (myAverage < 80) {
//     alert(`C`);
// } else if
// (myAverage < 90) {
//     alert(`B`);
// } else if
// (myAverage < 100) {
//     alert(`A`);
// }
  switch (true) {
      case (myAverage < 60):
          alert(`F`);
          break;
      case (myAverage < 70):
          alert(`D`);
          break;
      case (myAverage < 80):
          alert(`C`);
          break;
      case (myAverage < 90):
          alert(`B`);
          break;
      case (myAverage < 100):
          alert(`A`);
          break;
  }


// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

let mySum1 = 0;
  for (let i = 0; i <=1000; i++) {
      if (i % 3===0 || i % 5 ===0) {
          mySum1 += i;
      }
  }
  alert(mySum1);

// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.
//
//                                                                                      *
//
//                                                                                      * *
//
//                                                                                      * * *
//
//                                                                                      * * * *
//
//                                                                                      * * * * *

const mySymbol1 = `* `;
let result = '';
for (let i=0; i <=5; i++) {
    result += mySymbol1;
    console.log(result);
}
