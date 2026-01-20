function findFactors(number) {
  let factors = [1];
  for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  factors.push(number);
  return factors;
}
function findFactors(number) {
  let factors = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      factors.push(i);
      let otherMultiple = number / i;
      if (otherMultiple !== i) {
        factors.push(otherMultiple);
      }
    }
  }
  return factors.sort((a, b) => a - b);
}
function findFactors(number) {
  let factors = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      factors.splice(factors.length / 2, 0, i);
      let otherMultiple = number / i;
      if (otherMultiple !== i) {
        factors.splice(factors.length / 2 + 1, 0, otherMultiple);
      }
    }
  }
  return factors;
}
console.log(findFactors(6));
console.log(findFactors(100));
console.log(findFactors(25));

// FIND MULTIPLES OF A NUMBER UPTO N
function getAllMultiples(number, limit) {
  const multiples = [];
  let i = number;
  while (i <= limit) {
    multiples.push(i);
    i += number;
  }
  return multiples;
}
function getAllMultiple(number, limit) {
  const multiples = [];

  for (let i = number; i <= limit; i += number) {
    multiples.push(i);
  }
  return multiples;
}
console.log(getAllMultiples(5, 35));
console.log(getAllMultiples(7, 52));
console.log(getAllMultiple(5, 35));
console.log(getAllMultiple(7, 52));

//FIND HCF OF GIVEN NUMBERS
function calculateHCF(numA, numB) {
  const numAFactors = findFactors(numA);
  let HCF = 1;
  numAFactors.forEach((valA) => {
    if (numB % valA === 0) {
      HCF = valA;
    }
  });
  return { HCF };
}
function calculateHCF(numA, numB) {
  let divisor = numA > numB ? numB : numA;
  let dividend = numA > numB ? numA : numB;
  let loopCount = 0;
  while (dividend % divisor !== 0) {
    loopCount++;
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  console.log({ loopCount });
  return divisor;
}

console.log(calculateHCF(16, 8));
console.log(calculateHCF(10, 50));
console.log(calculateHCF(17, 89));

//FIND LCM OF TWO NUMBERS
function calculateLCM(num1, num2) {
  let dividend = num1 > num2 ? num1 : num2;
  let divisor = num1 > num2 ? num2 : num1;

  while (dividend % divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return (num1 * num2) / divisor;
}
console.log(calculateLCM(12, 16));
