// run-all.js : runs every assignment and the mini project in order (Node.js)
require('./prompt-shim.js');

const files = [
  ['Assignment 1', './assignments/assignment1.js'],
  ['Assignment 2', './assignments/assignment2.js'],
  ['Assignment 3', './assignments/assignment3.js'],
  ['Assignment 4', './assignments/assignment4.js'],
  ['Assignment 5', './assignments/assignment5.js'],
  ['Assignment 6', './assignments/assignment6.js'],
  ['Capstone Mini Project', './mini-project/inventory.js'],
];

files.forEach(([title, file]) => {
  console.log('\n==================== ' + title + ' ====================');
  require(file);
});
