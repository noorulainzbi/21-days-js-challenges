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
  if (number > 2) primeFactors.push(factor);
  return primeFactors;
}
function primeFactors(number) {
  let loopCount = 0;
  let factor = 2;
  const primeFactors = [];

  while (factor <= Math.sqrt(number)) {
    loopCount++;
    while (number % factor == 0) {
      loopCount++;
      primeFactors.push(factor);
      number = number / factor;
    }
    factor++;
  }
  console.log({ loopCount });
  return primeFactors;
}
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
    factor++;
  }
  if (number > 2) primeFactors.push(factor);
  return primeFactors;
}

console.log(primeFactors(8));
console.log(primeFactors(150));
console.log(primeFactors(16));

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
    factor++;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  let output = "";
  Object.keys(primeFactors).forEach((factor) => {
    output += factor + "^" + primeFactors[factor] + " ";
  });
  return output;
}
console.log(primeFactorsInExponentForm(8));
console.log(primeFactorsInExponentForm(18));
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
    factor++;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  return Object.keys(primeFactors).length;
}
console.log(distinctPrimeKeys(8));
console.log(distinctPrimeKeys(18));
console.log(distinctPrimeKeys(28));
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
    factor++;
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
    factor++;
  }
  if (number > 2) primeFactors[number] = (primeFactors[number] || 0) + 1;
  let isPowerFul = true;
  return Math.min(...Object.values(primeFactors)) >= 2;
}
console.log(isPowerFulPrimeFactors(49));
