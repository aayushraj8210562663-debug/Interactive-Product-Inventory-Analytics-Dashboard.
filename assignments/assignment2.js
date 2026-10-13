// Assignment 2: Operators, Expressions, and Input Handling
(function () {
  if (typeof require === 'function') require('../prompt-shim.js');

  // prompt() always returns a string -> explicit conversion with Number()
  const subtotal = Number(prompt('Enter bill amount ($):', '100'));
  const tipPercentage = Number(prompt('Enter tip percentage (%):', '15'));

  if (Number.isNaN(subtotal) || Number.isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
    console.log('Invalid input: please enter positive numbers only.');
    return;
  }

  let tip = subtotal * tipPercentage / 100;   // arithmetic operators
  let total = subtotal;
  total += tip;                               // assignment operator

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
})();
