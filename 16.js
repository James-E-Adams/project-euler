/*

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
*/

// Naive:

function doStuff() {
  const number = BigInt(Math.pow(2, 1000)).toString();
  const powerSum = number
    .split("")
    .map((int) => Number(int))
    .reduce((acc, val) => acc + val, 0);
  console.log({
    number,
    powerSum,
  });
}

doStuff();
