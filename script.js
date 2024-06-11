// Ex, Hello World x 25

// console.log("hello, world!");

// create a loop that runs 25 times
// var i = 0; // control variable - controls when loop breaks

// while (i < 25) {
//   //   console.log(i);
//   console.log("hello, world!");

//   i++; // increase i by 1. known  as "incrementor"
// }

// all loops need 3 things:
// 1. control variable
// 2. loop condition  E.g. i < 25  should ALWAYS start true, eventually become false. DO THIS CHECK
// 3. Increment the control variable, otherwise INFINITE LOOP!

// EX. 0-99
// let i = 0;
// while (i <= 99) {
//   console.log(i);
//   i++;
// }

// Ex. 99-0
// let i = 99;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// EX. user types stop

// let userWord = ""; // control variable

// while (userWord != "STOP") {
//   userWord = prompt("Type STOP to break the loop");
// }

// alert("Thanks for typing stop");

// Print all ODD numbers from 50 to 100 using a loop

// let j = 50;
// while (j <= 100) {
//   if (j % 2 == 1) {
//     console.log(j);
//   }

//   j++;
// }

// let m = 51;
// while (m <= 100) {
//   console.log(m);
//   m += 2; // same as m = m + 2
// }

// questions md #10
// let n = 0;
// while (n <= 4) {
//   console.log(n);
//   n++;
// }

// questions md #11
// let n = 5;
// while (n <= 15) {
//   console.log(n);
//   n++;
// }

// questions md #12
// let n = 0;
// while (n <= 10) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }

//   n++;
// }

// questions md #13
// let n = 5;
// while (n <= 15) {
//   if (n % 2 == 1) {
//     console.log(n);
//   }

//   n++;
// }

// questions md #14
// let n = 10;
// while (n >= 0) {
//   console.log(n);
//   n--;
// }

// questions md #15
// let n = 10;
// while (n >= 0) {
//   if (n != 5) {
//     console.log(n);
//   }

//   n--;
// }

// questions md #16
// let n = 1;
// while (n <= 100) {
//   if (n % 3 == 0 && n % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (n % 3 == 0) {
//     console.log("Fizz");
//   } else if (n % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(n);
//   }

//   n++;
//

// Ex 1
// var x = 0;
// while (x < 800) {
//   console.log("HELLO");
//   x++;
// }

// Ex 2
// var y = 20;
// while (y <= 500) {
//   console.log(y);
//   y += 5;
// }

// Ex 3
// var z = 100;
// while (true) {
//   console.log(z);
//   z -= 2; // same as z = z - 2
//   if (z == 8) {
//     break;
//   }
// }

// Ex 4
// let x = 18;
// let total = 0;

// while (x <= 150) {
//   console.log(`Total: ${total}`);
//   console.log(`x: ${x}`);
//   total += x;
//   x++;
// }

// Ex 5
// let y = 10;
// let total = 0;

// while (y <= 100) {
//   console.log(`Total: ${total}`);
//   console.log(`y: ${y}`);
//   total += y;
//   y += 5;
// }

// While 1 to 10
// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Ex. BLASTOFF
// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");

// Ex. factorial 5!
// let start = +prompt("Factorial: "); // need a loop to do: 5*4*3*2*1, then stop
// let result = 1;

// for (let i = start; i >= 1; i--) {
//   console.log(`i: ${i}`);
//   result = result * i;
//   console.log(`result: ${result}`);
// }

// Ex. odd sum: e.g. 10: 1 + 3 + 5 + 7 + 9 = 25

// let num = +prompt("Number: ");
// let total = 0;

// for (let i = 1; i <= num; i += 2) {
//   total += i;
// }

// console.log(total);

// 1. write mcdavid loop
// var x = 0;
// for (var x = 0; x < 1000; x++) {
//   console.log("McDavid");
// }

// var x = 0;
// while (x < 150) {
//   console.log("Loopity Loop");
//   x++;
// }

// for (let i = -20; i <= 20; i++) {
//   console.log(i);
// }100

// 2. for loop that prints the numbers 200 down to -50
// var x = 200;
// for (var x = 200; x >= -50; x--) {
//   console.log(x);
// }

// 3. program that asks the user for a number, then write a for loop that prints that many random single digit numbers

// let userNumber = +prompt("Enter a number");

// for (let g = 0; g < userNumber; g++) {
//   let random = Math.random() * 10;
//   random = Math.floor(random);
//   console.log(random);
// }

// Fix the infinite loop
// var num = -1;
// while (num < 0) {
//   num += 3;
// }

// Ex.  Prompter. User selects numbers 4 and 10.
// User's 3rd number must fall between 4 and 10.

// let min = +prompt("Enter MIN value");
// let max = +prompt("Enter MAX value");
// let userNum;

// do {
//   userNum = +prompt(`Enter a value between ${min} and ${max}`);
// } while (userNum < min || userNum > max);
// alert("Thank you!");

// Ex.  Break statement
// let num;
// while (true) {
//   num = +prompt("Enter a value between 1 and 10");
//   if (num >= 1 && num <= 10) {
//     break;
//   }
// }
// alert("Thanks!");

// Ex 25 to 1, skip 18 and 7
// let counter = 25;
// while (counter >= 1) {
//   counter--;
//   if (counter == 18 || counter == 7) {
//     continue; // skips the rest of the statements
//   }

//   console.log(counter);
// }

// Ex. Average Calculator
// let numOfValues = 0;
// let sum = 0;
// let userNum;

// let total = 0;
// let num;
// do {
//   num = +prompt("Enter a number (777 quits):");
//   total = total + num;
// } while (num != 777);

// total -= 777; // fixes the total

// console.log(`Total: ${total}`);

// var x = 10;
// do {
//   console.log("X is: " + x);
//   x--;
// } while (x > 7);
// console.log("Outside of loop.");

// var attempt = 1;
// while (true) {
//   console.log("Attempt #" + attempt);
//   if (attempt >= 3) {
//     break;
//   }
//   attempt++;
// }
// console.log("Loop exited.");

// var x = 1;
// while (x <= 3) {
//   console.log("Looping");
//   x++;
// }

// for (var i = 1; i <= 5; i++) {
//   console.log(i);
// }

var y = 1;
do {
  console.log(y);
  y++;
} while (y <= 3);
{
  console.log("End Loop");
}

// while (true) {
//   userNum = +prompt("Enter a value (0 to quit):");

//   if (userNum == 0) {
//     break;
//   }

//   // If code gets here, user has entered a good value
//   sum = sum + userNum;
//   numOfValues++; // tracks how many values user types
// }

// let average = sum / numOfValues;
// average = average.toFixed(1);

// alert(`The average is ${average}`);
