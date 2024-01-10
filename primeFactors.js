let isPrime = function(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let primeFactors = function(num) {

  let array = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i) && num % i === 0) {
      array.push(i);
    }
  }
  return array;
}


console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
