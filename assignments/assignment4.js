// Assignment 4: Loop Control Structures
(function () {
  if (typeof require === 'function') require('../prompt-shim.js');

  // for loop : multiplication table of 5
  console.log('-- Multiplication Table of 5 --');
  for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }

  // while loop with break : first number > 10 divisible by 6
  console.log('-- First number > 10 divisible by 6 --');
  let n = 11;
  while (true) {
    if (n % 6 === 0) {
      console.log(`Found: ${n}`);
      break;               // stop as soon as the number is found
    }
    n++;
  }

  // do...while loop with continue : print only odd numbers from 1 to 9
  console.log('-- Odd numbers from 1 to 9 (do...while + continue) --');
  let k = 0;
  do {
    k++;
    if (k % 2 === 0) {
      continue;            // skip even numbers
    }
    console.log(k);
  } while (k < 9);
})();
