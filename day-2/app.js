// FIND THE MAX NUMBR AMONG THREE

// Solution 1
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxOfThree(5, 5, 2));

// Solution 2

function highestOfThree(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log(highestOfThree(5, 5, 2));
// CHECK NUMBER IS POSITIVE, NEGATIVE OR ZERO

function checkPositiveOrNegative(number) {
  if (number > 0) {
    return "POSITIVE";
  } else if (number < 0) {
    return "NEGATIVE";
  }
  return "ZERO";
}
console.log(checkPositiveOrNegative(5));

// CALCULATE ELECTRICITY BILL
/*
0-100 UNITS Rs5
101-200 UNITS Rs7
201-300 UNITS Rs10
Above300 UNITS Rs12
*/

function calculateElectricityBill(units) {
  let amountToPay;
  if (units < 0) return;
  if (units > 0 && units <= 100) {
    amountToPay = units * 5;
  } else if (units <= 200) {
    amountToPay = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    amountToPay = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    amountToPay = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }
  return amountToPay;
}
console.log(calculateElectricityBill(230));

// CHECK IF A CHARACHTER IS VOWEL OR CONSONANT
let vowels = "aeiou";
function isVowelOrConsonant(char) {
  if (!/[a-z]/i.test(char) || char.length !== 1)
    throw new Error("Invalid character");

  if (vowels.includes(char.toLowerCase())) {
    return "Vowel";
  }
  return "Consonant";
}
console.log(isVowelOrConsonant("a"));
console.log(isVowelOrConsonant("f"));
console.log(isVowelOrConsonant("U"));

// CHECK  WHEATHER THE YEAR IS LEAP
function isLeapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }
  return false;
}
console.log(isLeapYear(234));
console.log(isLeapYear(100));
console.log(isLeapYear(200));
console.log(isLeapYear(400));

//  CHECK WHETHER AN INPUT IS UPPERCASE LOWERCASE DIGIT OR SPECIAL
// Solution 1
function checkCharacter(character = "") {
  if (typeof character !== "string" || character.length !== 1) {
    return "Invalid input";
  }

  const code = character.charCodeAt(0);

  if (code >= 48 && code <= 57) {
    return "Digit";
  } else if (code >= 65 && code <= 90) {
    return "Uppercase";
  } else if (code >= 97 && code <= 122) {
    return "Lowercase";
  }

  return "Special Character";
}
// Solution 2
function checkCharacter(character = "") {
  if (/^[0-9]$/.test(character)) {
    return "Digit";
  } else if (/^[A-Z]$/.test(character)) {
    return "Uppercase";
  } else if (/^[a-z]$/.test(character)) {
    return "Lowercase";
  }
  return "Special Character";
}

console.log(checkCharacter("a"));
console.log(checkCharacter(9));
console.log(checkCharacter("$"));
console.log(checkCharacter("Q"));

// CHECK TRIANGLE TYPE
function chechTriangleType(a, b, c) {
  const sides = [a, b, c].sort((s1, s2) => s1 - s2);
  console.log(sides);
  const [x, y, z] = sides;
  const isRight = x ** 2 + y ** 2 === z ** 2;
  if (x == y && y == z) {
    return "equilateral";
  } else if (x == y || y == z || z == x) {
    return isRight ? "Right-angle/Isosceles" : "Isosceles";
  }
  return isRight ? "Right-angle/Scalene" : "Scalene";
}
console.log(chechTriangleType(45, 45, 90));
