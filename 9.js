// Naive solution - doesn't solve in a reasonable time.
// const memo = { 1: true, 2: true, 3: true, 4: false };

// function isPrime(num) {
//   const memoisedValue = memo[num];

//   if (memoisedValue !== undefined) return memoisedValue;
//   if (num % 2 === 0) return false;

//   for (let i = 2; i < num / 2; i++) {
//     if (num % i === 0) {
//       memo[num] = false;
//       return false;
//     }
//   }
//   memo[num] = true;
//   return true;
// }

// function sumOfPrimes(max) {
//   let sum = 0;
//   for (let i = 2; i <= max; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   console.log(`Sum of all primes under ${max} is ${sum}`);
// }

// sumOfPrimes(200000);

// Attempt #2 using https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

function sumOfPrimes(max) {
  // false => prime
  // true => composite
  const memo = {
    2: false,
  };

  let currentPrime = 2;

  while (currentPrime) {
    let foundNewNumber = false;
    for (let i = 2 * currentPrime; i <= max; i += currentPrime) {
      // console.log(`${i} isn't prime`);
      memo[i] = true;
    }
    for (let j = currentPrime + 1; j <= max; j++) {
      if (!memo[j]) {
        currentPrime = j;
        memo[j] = false; //found a prime
        foundNewNumber = true;
        break;
      }
    }
    if (!foundNewNumber) {
      currentPrime = false;
    }
  }
  // console.log({ memo });
  const sum = Object.keys(memo).reduce((acc, number) => {
    if (!memo[number]) {
      return acc + Number(number);
    }
    return acc;
  }, 0);

  console.log(`Sum of all primes under ${max}, inclusive, is ${sum}`);
}

sumOfPrimes(2000000);
