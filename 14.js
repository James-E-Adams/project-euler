/*Longest Collatz sequence


The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

// Naive: Check the length of chain for each starting number
// Quickest optimisation, store the length of each chain once you know it, so you can just check a number and see what its chain length is, otherwise compute it and memoise.
// Opt: Save current largest sequence to avoid an O(n) loop at the end

//Maps number to sequence length, including itself.
const memo = {
  1: 1,
  2: 2,
  4: 3,
  8: 4,
  16: 5,
  5: 6,
};

const upperBound = 1000000;

function doStuff() {
  let currentMax = 5;
  let currentMaxStartingNumber = 16;

  for (let startingNumber = 1; startingNumber < upperBound; startingNumber++) {
    let currentNumber = startingNumber;
    let currentChain = 0;
    while (currentNumber !== 1) {
      if (memo[currentNumber]) {
        currentChain += memo[currentNumber];
        currentNumber = 1;
        break;
      }
      //even
      if (currentNumber % 2 === 0) {
        currentNumber = currentNumber / 2;
      } //odd
      else {
        currentNumber = currentNumber * 3 + 1;
      }
      currentChain++;
    }
    memo[startingNumber] = currentChain;
    if (currentChain > currentMax) {
      currentMax = currentChain;
      currentMaxStartingNumber = startingNumber;
      // console.log(
      //   `Found a new longest sequence of ${currentMax} for ${currentMaxStartingNumber}`
      // );
    }
  }
  console.log(
    `Found a longest sequence of ${currentMax} for ${currentMaxStartingNumber}`
  );
}

doStuff();
