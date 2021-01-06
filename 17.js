/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const numberToLength = {
  1: "one".length,
  2: "two".length,
  3: "three".length,
  4: "four".length,
  5: "five".length,
  6: "six".length,
  7: "seven".length,
  8: "eight".length,
  9: "nine".length,
  10: "ten".length,
  11: "eleven".length,
  12: "twelve".length,
  13: "thirteen".length,
  14: "fourteen".length,
  15: "fifteen".length,
  16: "sixteen".length,
  17: "seventeen".length,
  18: "eighteen".length,
  19: "nineteen".length,
  20: "twenty".length,
  30: "thirty".length,
  40: "forty".length,
  50: "fifty".length,
  60: "sixty".length,
  70: "seventy".length,
  80: "eighty".length,
  90: "ninety".length,
};

function doStuff() {
  let sum = 0;
  /*
  (// add all numbers between 1..19
  // Add each of (twenty..ninety) 10 times
  // add all numbers (1..9) * 8 times for 21..99.)
  * 10 times (for each hundred)
  */
  for (let i = 1; i <= 19; i++) {
    sum += numberToLength[i];
  }

  let tenths = 20;
  while (tenths < 100) {
    sum += numberToLength[tenths] * 10;
    tenths += 10;
  }

  for (let i = 1; i <= 9; i++) {
    sum += numberToLength[i] * 8;
  }

  sum *= 10;

  // add (one-nine) each * 100 times (for 1 hundred and x)
  for (let i = 1; i <= 9; i++) {
    sum += numberToLength[i] * 100;
  }

  // add 'and' for all numbers besides 1-99, 100, 200, 300, 400, 500, 600, 700, 800 ,900, 1000, so 891 times.

  sum += 3 * 891;

  //"hundred" is used for every number besides 1-99 and 1000.
  // so you can add 900 * hundred

  sum += 900 * 7;

  //add 'one thousand'.length

  sum += "onethousand".length;
  console.log({ sum });
}

doStuff();

//I really liked this one - nothing complex required but totally makes you think about the most efficient way to have the computer help you.
