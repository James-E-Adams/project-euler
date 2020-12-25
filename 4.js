//Started at 8:53pm 25/12/2020

console.log(`Biggest number is 999 x 999 -> ${999 * 999}`);

//So our solutions space is 100 x 100  -> 999 x 999
//                          10000      -> 998001

// Go backwards from 998001 and have it satisfy 2 criteria:

/*
 - It's a palindrome
 - It's divisible by a number > 100
*/

function isPalindrome(number) {
  const numberAsString = `${number}`;
  const length = numberAsString.length;
  // length 6, it'll go 0th,1st,2nd - great
  // length 5, it'll go 0, 1, 2 but we don't want to look at 2, so can take Math.floor.
  const maxToCheck = Math.floor(length / 2);
  for (let i = 0; i < maxToCheck; i++) {
    if (numberAsString[i] !== numberAsString[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function doTheStuff() {
  for (let i = 998001; i > 10000; i--) {
    if (isPalindrome(i)) {
      console.log(`Found a palendrome! ${i}`);
      for (let j = 100; j < 999; j++) {
        //Make sure it is the product of two 3 digit numbers.
        if (i % j === 0 && `${i / j}`.length === 3) {
          console.log(`Found the number! It's ${i} and divisible by ${j}`);
          return;
        }
      }
    }
  }
}

doTheStuff();

// const testNumbers = [10045, 12321, 123321];
// testNumbers.forEach((val) => {
//   console.log(`${val}, ${isPalindrome(val)}`);
// });
