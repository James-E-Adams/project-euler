/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

//Forgot about labelled loops hah
//https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript

function slow() {
  loop1: for (let i = 2520; true; i++) {
    loop2: for (let j = 2; j < 21; j++) {
      if (i % j !== 0) {
        continue loop1;
      }
    }
    console.log({ i });
    break;
  }
}

//If it's divisible by 20 then it has to be a multiple of 20s so we can just go up in 20s

function faster() {
  loop1: for (let i = 2520; true; i += 20) {
    loop2: for (let j = 2; j < 21; j++) {
      if (i % j !== 0) {
        continue loop1;
      }
    }
    console.log({ i });
    break;
  }
}

faster();
