// Question 1: PRINT NUMBERS FROM 1 TO N
// Method 1

let limit1 = 5;
for (let i = 1; i <= limit1; i++) {
  console.log(i);
}

// Method 2: Take input from user using DOM manipulation

const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#button");

buttonEl.addEventListener("click", () => {
  const userLimit = parseInt(inputEl.value);

  if (!isNaN(userLimit)) {
    for (let i = 1; i <= userLimit; i++) {
      const li = document.createElement("li");
      li.innerText = i;
      document.body.appendChild(li);
    }
  }
});
// Question 2: PRINT NUMBERS FROM N TO 1 WITHOUT CHANGING LOOP CONDITION

let reverseLimit = 5;
for (let i = 1; i <= reverseLimit; i++) {
  console.log(reverseLimit - i + 1);
}
// Question 3: PRINT ALL EVEN NUMBERS FROM 1 TO N
// Solution 1

let evenLimit1 = 20;
for (let i = 1; i <= evenLimit1; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Solution 2

let evenLimit2 = 20;
for (let i = 2; i <= evenLimit2; i += 2) {
  console.log(i);
}
// Question 4: SUM OF FIRST N NATURAL NUMBERS
// Solution 1 (BigInt)

let sumLimitBig = 5n;
let sumBig = 0n;

for (let i = 1n; i <= sumLimitBig; i++) {
  sumBig += i;
}
console.log(sumBig);
// Solution 2 (Formula)

let sumLimit = 5;
console.log((sumLimit * (sumLimit + 1)) / 2);
// FACTORIAL OF A NUMBER

let factorialNum = 5;
let factorialResult = 1;

for (let i = 1; i <= factorialNum; i++) {
  factorialResult *= i;
}
console.log(factorialResult);
// SUM OF N EVEN NATURAL NUMBERS
// Solution 1

let evenSumLimit1 = 12;
let evenSum1 = 0;

for (let i = 1; i <= evenSumLimit1; i++) {
  if (i % 2 === 0) {
    evenSum1 += i;
  }
}
console.log(evenSum1);
// Solution 2

let evenSumLimit2 = 12;
let evenSum2 = 0;

for (let i = 2; i <= evenSumLimit2; i += 2) {
  evenSum2 += i;
}
console.log(evenSum2);
// PRINT SQUARE OF NUMBERS FROM 1 TO N

let squareLimit = 5;
for (let i = 1; i <= squareLimit; i++) {
  console.log(i * i);
  console.log(i ** 2);
  console.log(Math.pow(i, 2));
}
// PRINT ALL NUMBERS DIVISIBLE BY 3 AND 5

let divisibleLimit = 30;
for (let i = 1; i <= divisibleLimit; i++) {
  if (i % 15 === 0) {
    console.log(i);
  }
}
// PRINT ALL ODD NUMBERS UP TO N

let oddLimit = 10;

// Method 1
for (let i = 1; i <= oddLimit; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// Method 2
for (let i = 1; i <= oddLimit; i += 2) {
  console.log(i);
}
// PRINT CUBE OF NUMBERS UP TO N

let cubeLimit = 5;
for (let i = 1; i <= cubeLimit; i++) {
  console.log(i * i * i);
  console.log(Math.pow(i, 3));
}
// PRINT ONLY NUMBERS UP TO N THAT ARE BOTH EVEN AND PERFECT SQUARE

let perfectSquareLimit = 20;
for (let i = 2; i <= perfectSquareLimit; i += 2) {
  if (Number.isInteger(Math.sqrt(i))) {
    console.log(i);
  }
}
