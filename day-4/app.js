//
const digits = [2, 4, 6, 5];
let newNumber = digits.reduce((acc, cur, index) => {
  return acc + cur * 10 ** index;
}, 0);
console.log(newNumber);

let value = 0;
for (let index = digits.length - 1; index >= 0; index--) {
  value += digits[index] * 10 ** index;
}
console.log(value);

/****************************** Question#1 *****************************/
// SPLIT NUMBERS INTO DIGITS
let number1 = 12345;
function numberToDigitsArray(number) {
  let digitsArray = [];
  while (number) {
    digitsArray.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  return digitsArray;
}
console.log(numberToDigitsArray(number1));
/****************************** Question#2 *****************************/
//REVERSE A NUMBER
function reverseNumber(number) {
  let digitsArray = [];
  while (number > 0) {
    digitsArray.unshift(number % 10);
    number = Math.floor(number / 10);
  }

  let reverseNumber = digitsArray.reduce(
    (acc, cur, idx) => acc + cur * 10 ** idx,
    0,
  );
  console.log(reverseNumber);
}
reverseNumber(123);
/****************************** Question#3 *****************************/
// REMOVE THE DECIMAL POINT FROM A NUMBER

let number2 = 5.373423;
function removeDecimalPoint(number) {
  while (number % 1 !== 0) {
    number = number * 10;
  }
  return number;
}
removeDecimalPoint(number2);
/****************************** Question#4 *****************************/
// SEPARATE THE WHOLE AND FRACTIONAL PART
function separateParts(number) {
  let fractionPart = Number((number % 1).toFixed(10));
  let wholePart = Number((number - fractionPart).toFixed(2));
  return { wholePart, fractionPart };
}
console.log(separateParts(number2));
/****************************** Question#5 *****************************/
//GENERATE NUMBER FROM WHOLE AND FRACTIONAL PARTS ARRAYS
function generateNumberFromWholeAndFractionalArrays(whole, fraction) {
  function generateNumberFromArray(arr) {
    let generatedNumber = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      generatedNumber += arr[i] * 10 ** (arr.length - 1 - i);
    }
    return generatedNumber;
  }
  const wholePart = generateNumberFromArray(whole);
  let fractionPart = generateNumberFromArray(fraction);
  fractionPart = fractionPart / 10 ** fraction.length;

  return wholePart + fractionPart;
}
console.log(generateNumberFromWholeAndFractionalArrays([1, 2], [3, 2]));

// CHECK A NUMBER IS PALINDROM 0R NOT
function isPalindrom(number) {
  let numberCopy = number;
  let digitsArray = [];
  while (numberCopy > 0) {
    digitsArray.unshift(numberCopy % 10);
    numberCopy = Math.floor(numberCopy / 10);
  }

  let reverseNumber = digitsArray.reduce(
    (acc, cur, idx) => acc + cur * 10 ** idx,
    0,
  );
  return reverseNumber === number;
}
console.log(isPalindrom(121));
// CHECK IS A NUMBER ARMSTRONG OR NOT
function isArmStrong(number) {
  let numberCopy = number;
  let digitsArray = [];
  let armStrongNumber = 0;
  while (numberCopy > 0) {
    digitsArray.unshift(numberCopy % 10);
    numberCopy = Math.floor(numberCopy / 10);
  }
  digitsArray.forEach((digit) => {
    armStrongNumber += digit ** digitsArray.length;
  });
  console.log(armStrongNumber);
  return number === armStrongNumber;
}
console.log(isArmStrong(153));
console.log(isArmStrong(143));
