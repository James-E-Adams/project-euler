const memo = { 1: true, 2: true, 3: true, 4: false };

function isPrime(num) {
  const memoisedValue = memo[num];

  if (memoisedValue !== undefined) return memoisedValue;
  if (num % 2 === 0) return false;

  for (let i = 2; i < num / 2; i++) {
    // console.log(`trying ${i}`);
    if (num % i === 0) {
      console.log(`${num} is divisible by ${i}`);
      memo[num] = false;
      return false;
    }
  }
  console.log(`${num} is prime!`);
  memo[num] = true;
  return true;
}

function getPrimeFactors(num) {
  console.log(`collecting prime factors for ${num}`);
  if (isPrime(num)) return [num]; //base case

  let currentTarget = num;

  let factors = [];

  //Until we've made it all the factors
  while (currentTarget !== 1) {
    if (isPrime(currentTarget)) {
      factors = [...factors, currentTarget];
      currentTarget /= currentTarget;
    }
    for (let i = 2; i < currentTarget / 2; i++) {
      if (currentTarget % i === 0) {
        console.log(
          `${currentTarget} is divisible by ${i}! Collect prime factors for ${i}`
        );
        // It's divisible by that number, now let's find that number's prime factors
        const newPrimeFactors = getPrimeFactors(i);
        factors = [...factors, ...newPrimeFactors];
        currentTarget /= i;
        break;
      }
    }
    console.log(`Stuck here with currentTarget: ${currentTarget}`);
  }

  return factors;
}

const testNumbers = [
  // 4, 7, 100, 102981, 102982,
  600851475143,
];
testNumbers.forEach((val) => {
  console.log(`${val}, ${getPrimeFactors(val)}`);
});
