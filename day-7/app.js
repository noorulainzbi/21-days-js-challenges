// Find prime factors of a number
// Solution 1
function primeFactors(number) {
  let factor = 2;

  const primeFactors = [];
  while (number !== 1) {
    while (number % factor == 0) {
      primeFactors.push(factor);
      number = number / factor;
    }
    factor++;
  }
  return primeFactors;
}
// Solution 2
function primeFactors(number) {
  let factor = 2;
  const primeFactors = [];

  while (factor <= Math.sqrt(number)) {
    while (number % factor == 0) {
      primeFactors.push(factor);
      number = number / factor;
    }
    factor++;
  }

  return primeFactors;
}
// Solution 3
function primeFactors(number) {
  let factor = 3;

  const primeFactors = [];
  while (number % 2 == 0) {
    primeFactors.push(2);
    number = number / 2;
  }
  while (factor <= Math.sqrt(number)) {
    while (number % factor == 0) {
      primeFactors.push(factor);
      number = number / factor;
    }
    factor += 2;
  }
  if (number > 2) primeFactors.push(number);
  return primeFactors;
}
// console.log(primeFactors(8));
// console.log(primeFactors(150));
// console.log(primeFactors(16));
// calculate prime factors in exponent form
function primeFactorsInExponentForm(number) {
  let factor = 3;
  const primeFactors = {};
  while (number % 2 == 0) {
    // primeFactors[2] = primeFactors[2] ? ++primeFactors[2] : 1;
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    number = number / 2;
  }
  while (factor <= Math.sqrt(number)) {
    while (number % factor == 0) {
      //   primeFactors[factor] = primeFactors[factor] ? primeFactors[factor]++ : 1;
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      number = number / factor;
    }
    factor += 2;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  let output = "";
  Object.keys(primeFactors).forEach((factor) => {
    output += factor + "^" + primeFactors[factor] + " ";
  });
  return output;
}
// console.log(primeFactorsInExponentForm(8));
// console.log(primeFactorsInExponentForm(18));
// find ditinct prime factors of a number
function distinctPrimeKeys(number) {
  let factor = 3;
  const primeFactors = {};
  while (number % 2 == 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    number = number / 2;
  }
  while (factor <= Math.sqrt(number)) {
    while (number % factor == 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      number = number / factor;
    }
    factor += 2;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  return Object.keys(primeFactors).length;
}
// console.log(distinctPrimeKeys(8));
// console.log(distinctPrimeKeys(18));
// console.log(distinctPrimeKeys(28));
// Check whether a number has powerful prime factors
// Solution 1
function isPowerFulPrimeFactors(number) {
  let factor = 3;
  const primeFactors = {};
  while (number % 2 == 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    number = number / 2;
  }
  while (factor <= Math.sqrt(number)) {
    while (number % factor == 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      number = number / factor;
    }
    factor += 2;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  let isPowerFul = true;
  Object.values(primeFactors).forEach((value) => {
    if (value < 2) {
      isPowerFul = false;
      return;
    }
  });
  return isPowerFul;
}
// Solution 2
function isPowerFulPrimeFactors(number) {
  let factor = 3;
  const primeFactors = {};
  while (number % 2 == 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    number = number / 2;
  }
  while (factor <= Math.sqrt(number)) {
    while (number % factor == 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      number = number / factor;
    }
    factor += 2;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  return Math.min(...Object.values(primeFactors)) >= 2;
}
// console.log(isPowerFulPrimeFactors(49));

// Home Work Questions
//
function productOfDistinctPrimeKeys(number) {
  let factor = 3;
  const primeFactors = {};
  while (number % 2 == 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    number = number / 2;
  }
  while (factor <= Math.sqrt(number)) {
    while (number % factor == 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      number = number / factor;
    }
    factor += 2;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  return Object.keys(primeFactors).reduce((acc, cur) => acc * cur, 1);
}
// console.log(productOfDistinctPrimeKeys(8));
// console.log(productOfDistinctPrimeKeys(18));
// check whether a number is square-free
function isSquareFree(number) {
  let factor = 3;
  const primeFactors = {};
  while (number % 2 == 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    number = number / 2;
  }
  while (factor <= Math.sqrt(number)) {
    while (number % factor == 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      number = number / factor;
    }
    factor += 2;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  return Math.max(...Object.values(primeFactors)) === 1;
}
// console.log(isSquareFree(8));
// console.log(isSquareFree(14));
// check whether a number is a smith number
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
function digitsSum(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
function isSmith(number) {
  if (isPrime(number)) {
    console.log("prime");
    return false;
  }
  const sumOfDigits = digitsSum(number);
  const factors = primeFactors(number);

  let primeFactorsSum = 0;
  for (let f of factors) {
    primeFactorsSum += digitsSum(f);
  }
  return primeFactorsSum === sumOfDigits;
}
console.log(isSmith(78));
console.log(isSmith(666));

// Check whether a number is an ugly number

function isUgly(number) {
  if (number <= 0) return false;
  if (number <= 3) return true;
  for (let p of [2, 3, 5]) {
    while (number % p === 0) {
      number /= number;
    }
  }
  return number === 1;
}
console.log(isUgly(666))
