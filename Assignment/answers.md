# Answers to Questions

1. The purpose of a loop structure is to repeat coding statements a certain number of times. This reduces the need to repeat some coding statements.

2. A do-while loop is guaranteed to run at least once, even if the boolean condition starts out as false. A while loop would not run even one time. Otherwise, the loops are the same.

3. a) An infinite loop is a loop who's condition is ALWAYS true and thus runs continuously. b) Your browser will appear to 'hang' c) Make sure your syntax is right (no semicolons in the wrong spot), and make sure you're control variable will eventually cause the loop condition to become false.

4. 60

5. Many possibilities, e.g.
   a. x = x + 10
   b. x = x - 1

7. a. y < 20  b. y > -50

8. A counter is a variable that keeps track of how many times a loop runs (or the number of iterations of a loop). An accumulator adds up values entered by a user.

9. 
```
let total = 0;
for (let i = 3; i <= 10; i++){
  total += i;
}
console.log(total)
```

# Exercise 1
1. 
```
for (let i = 0; i < 800; i++){
  console.log('HELLO!');
}
```

2. 
```
for (let i = 20; i <= 500; i += 5){
  console.log(i);
}
```

3. 
```
for (let i = 100; i >= 10; i -= 2){
  console.log(i);
}
```

4. 
```
let total = 0;
for (let i = 18; i <= 150; i++){
  total = total + i;
}
console.log(total)
```

5. 
```
let total = 0;
for (let i = 10; i <= 100; i += 5){
  total = total + i;
}
console.log(total)
```

# Exercise 14

```
let dice1;
let dice2;
let total;

console.log('Dice 1\tDice 2\tTotal');

for (let i = 0; i < 6; i++){
  dice1 = Math.round(Math.random()*5 + 1);
  dice2 = Math.round(Math.random()*5 + 1);
  total = dice1 + dice2;

  console.log(dice1 + '\t' + dice2 + '\t' + total)
}
```

# Exercise 17

```
const PASSWORD = 'rosebud';
var userEntry;
var guessedCorrect;

for (let i = 0; i < 3; i++){
  userEntry = prompt('Enter the password: ')
  if (userEntry == PASSWORD){
    alert('Welcome');
    guessedCorrect = true;
    break; // the break keyword will exit the loop
  } else {
    alert('The password you typed is incorrect.')
  }
} // end of loop

// if they did NOT guess correctly...
if (!guessedCorrect){
  alert('Access denied.')
}
```

# Exercise 8

```
var SECRET_NUMBER = 8;
var userGuess = +prompt('Enter a number between  1 and 20:')

while (userGuess != SECRET_NUMBER) {
  alert('Try again.')
  userGuess = +prompt('Enter a number between  1 and 20:')
} 

alert('You won!')
```