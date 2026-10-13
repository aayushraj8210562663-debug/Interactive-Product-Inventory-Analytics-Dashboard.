// Assignment 1: Variables, Data Types, and Console Operations
(function () {
  if (typeof require === 'function') require('../prompt-shim.js');

  var userName = 'Alice';                       // var   -> function scoped
  let age = 25;                                 // let   -> block scoped, re-assignable
  let isEmployed = true;                        // let
  const skills = ['HTML', 'CSS', 'JavaScript']; // const -> cannot be re-assigned

  // Helper to print an array like ["HTML", "CSS", "JavaScript"]
  const showArray = (arr) => '[' + arr.map((item) => `"${item}"`).join(', ') + ']';

  console.log(`Name: ${userName} (Type: ${typeof userName})`);
  console.log(`Age: ${age} (Type: ${typeof age})`);
  console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
  console.log(`Skills: ${showArray(skills)} (Type: ${typeof skills})`);
})();
