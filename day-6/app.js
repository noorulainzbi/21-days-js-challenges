function isPrime(number) {
  let factors = 0;
  for (let i = 1; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      factors++;
      const otherFactor = number / i;
      if (otherFactor !== i) factors++;
    }
  }

  return factors == 2;
}
function isPrime(number) {
  let isPrime = true;
  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}
console.log(isPrime(7));
console.log(isPrime(27));

// check weather two numbers are co-prime
function isCoPrime(num1, num2) {
  let divisor = num1 > num2 ? num2 : num1;
  let dividend = num1 > num2 ? num1 : num2;
  while (dividend % divisor !== 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  return divisor === 1;
}

// console.log(isCoPrime(2, 3));
// console.log(isCoPrime(8, 9));
// console.log(isCoPrime(4, 8));

// fabonacci
function printFibonacci(limit) {
  let fibonacciSeries = [0, 1];
  for (let i = fibonacciSeries.length; i < limit; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 2] + fibonacciSeries[i - 1];
  }
  return fibonacciSeries;
}
// console.log(printFabonacci(6));
function fibonacciSeries(limit) {
  let fabonacciSeries = [0, 1];
  for (let i = 2; i < limit; i++) {
    fabonacciSeries.push(fabonacciSeries[i - 2] + fabonacciSeries[i - 1]);
  }
  return fabonacciSeries;
}
// console.log(fibonacciSeries(6));
function fib(limit) {
  let a = 0,
    b = 1;

  for (let i = 0; i < limit; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}
// fib(5);
// fibonacci series without array
// 0,1,1,2,3,5,8
function fibSeries(limit) {
  let first = 0;
  let second = 1;

  for (let i = 0; i < limit; i++) {
    // console.log(first);

    let next = first + second; // find next number
    first = second; // shift forward
    second = next; // shift forward
  }
}

// fibSeries(4);

// nth fabonacci
function nthFibonacciSeries(limit) {
  let fabonacciSeries = [0, 1];
  for (let i = 2; i < limit; i++) {
    fabonacciSeries.push(fabonacciSeries[i - 2] + fabonacciSeries[i - 1]);
  }
  console.log(fabonacciSeries);
  return fabonacciSeries[fabonacciSeries.length - 1];
}
// console.log(nthFibonacciSeries(7));

// check whether a number is belongs to fabonacci series
function isBelongToFibSeries(num) {
  let first = 0;
  let second = 1;
  while (true) {
    let next = first + second;
    if (next === num || num === 0) return true;
    if (next > num) break;
    first = second;
    second = next;
  }
  return false;
}
// console.log(isBelongToFibSeries(8));
// console.log(isBelongToFibSeries(0));
// console.log(isBelongToFibSeries(12));
function isInFabSeries(num) {
  return (
    Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
  );
}
// console.log(isInFabSeries(8));
// console.log(isInFabSeries(12));

// Home Work
// print all prime numbers up to N
function printPrimeNumberUptoN(n) {
  let primes = [2];
  for (let i = 3; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes.push(i);
  }
  return primes;
}
console.log(printPrimeNumberUptoN(4));
console.log(printPrimeNumberUptoN(9));
// sum of all prime numbers upto N
function sumPrimeNumberUptoN(n) {
  let primes = [2];
  for (let i = 3; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes.push(i);
  }
  return primes.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumPrimeNumberUptoN(4));
console.log(sumPrimeNumberUptoN(9));

// Check two numbers are twin prime
function isTwinPrime(num1, num2) {
  let isFirstPrime = isPrime(num1);
  let isSecondPrime = isPrime(num2);
  console.log(isFirstPrime);
  console.log(isSecondPrime);
  if (!isFirstPrime || !isSecondPrime) return "Both numbers must be prime";
  return num2 - num1 === 2 || num1 - num2 === 2;
}
console.log(isTwinPrime(5, 7));
console.log(isTwinPrime(6, 8));
// print all fabonacci numbers upto N
function fabonacciUptoN(number) {
  let first = 0;
  let second = 1;
  for (let i = 1; true; i++) {
    if (first > number) break;
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
  }
}
// fabonacciUptoN(8);

// Print fabonacci within a range
function fibonacciWithinRange(start, end) {
  if (start > end) {
    console.log("Invalid range");
    return [];
  }

  let result = [];
  let first = 0;
  let second = 1;

  while (first <= end) {
    if (first >= start) {
      result.push(first);
    }

    let next = first + second;
    first = second;
    second = next;
  }

  return result;
}

console.log(fibonacciWithinRange(2, 8));
console.log(fibonacciWithinRange(23, 8));

function sumOfEvenFibonacci(number) {
  let sum = 0;
  let first = 0;
  let second = 1;
  while (first <= number) {
    if (first % 2 === 0) sum += first;
    let next = first + second;
    first = second;
    second = next;
  }
  return sum;
}
console.log(sumOfEvenFibonacci(34));
function sumOfEvenFibonacci(number) {
  let sum = 0;
  let a = 0;
  let b = 2;
  while (a <= number) {
    sum += a;
    let next = 4 * b + a;
    a = b;
    b = next;
  }
  return sum;
}
console.log(sumOfEvenFibonacci(34));

// check whether the sum of two consective fibnoccis is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function isTwoConsecutiveFibPrime(num1, num2) {
  const isFirstPrime = isPrime(num1);
  const isSecondPrime = isPrime(num2);
  if (!isFirstPrime || !isSecondPrime) return "Numbers must be prime";
  const small = num1 > num2 ? num2 : num1;
  const large = num1 > num2 ? num1 : num2;
  const isConsecutive =
    small ** 2 + small * large - large ** 2 === 1 ||
    small ** 2 + small * large - large ** 2 === -1;
  if (!isConsecutive) return "Numbers must be consective";
  return small + large;
}
console.log(isTwoConsecutiveFibPrime(5, 8));
console.log(isTwoConsecutiveFibPrime(12, 19));
console.log(isTwoConsecutiveFibPrime(2, 3));

//Print first N fibonacci prime numbers
function printNFibonacciPrimeNumbers(limit) {
  let a = 0;
  let b = 1;
  let primeFibonacci = [];
  while (primeFibonacci.length !== limit) {
    if (isPrime(a)) primeFibonacci.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return primeFibonacci;
}
console.log(printNFibonacciPrimeNumbers(5));
