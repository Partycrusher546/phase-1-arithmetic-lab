// Write your code here
// question 1
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;
if (multiply === 62) {
  console.log(`The product of ${num1} and ${num2} is 62.`);
} else {
  console.log(
    `Oops! The product is not 62. Try different values for num1 and num2.`
  );
}
//question 2
const random = Math.floor(Math.random() * 100) + 1;
console.log(`Random number: ${random}`);
//question 3
const num3 = 25;
const num4 = 7;
const mod = num3 % num4;

if (mod === 4) {
  console.log(`The remainder of ${num3} divided by ${num4} is 4.`);
} else {
  console.log(`The remainder does not meet the requirement.`);
}
//question 4
const numbers = [10, 5, 20, 15, 8];

const max = Math.max(...numbers);

console.log("The highest number is:", max);
