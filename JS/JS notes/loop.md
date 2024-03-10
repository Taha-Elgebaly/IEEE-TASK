```java script
// JavaScript Loops Tutorial with Examples

// `for` Loop:
for (let i = 0; i < 5; i++) {
  console.log(`for Loop: Iteration ${i + 1}`);
}

// Example: Summing Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log(`Sum of numbers 1 to 10: ${sum}`);

// `while` Loop:
let count = 0;
while (count < 5) {
  console.log(`while Loop: Iteration ${count + 1}`);
  count++;
}

// Example: Generating Random Numbers
let randomNumber;
while ((randomNumber = Math.floor(Math.random() * 10) + 1) !== 5) {
  console.log(`Random Number: ${randomNumber}`);
}

// `do-while` Loop:
let counter = 0;
do {
  console.log(`do-while Loop: Iteration ${counter + 1}`);
  counter++;
} while (counter < 5);

// Example: Validating User Input
let userNumber;
do {
  userNumber = parseInt(prompt("Enter a number:"));
} while (isNaN(userNumber));
console.log(`User entered a valid number: ${userNumber}`);

// Loop Control Statements:

// `break` Statement:
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(`break Statement: ${i}`);
}

// `continue` Statement:
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(`continue Statement: ${i}`);
}

// Notes:
// - `for` loop is ideal when the number of iterations is known.
// - `while` loop is useful when the number of iterations is not known in advance.
// - `do-while` ensures at least one execution of the loop body.
// - Use loop control statements judiciously to control the flow of execution.

```