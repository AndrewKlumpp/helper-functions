let factorize = function(num) {
  let factorCount = 0
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factorCount++
    }
  }
  return factorCount;
}

let isAntiPrime = function(n) {
  for (let i = 1; i < n; i++) {
    if (factorize(i) >= factorize(n)) {
      return false;
    }
  }
  return true;
}



console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
