// Assignment 5: Function Architecture and Scope
(function () {
  if (typeof require === 'function') require('../prompt-shim.js');

  // Standard (declaration) function with default parameters
  function rectangleArea(length = 5, width = 4) {
    return length * width;
  }

  // Arrow function with default parameters
  const rectangleAreaArrow = (length = 5, width = 4) => length * width;

  console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
  console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

  // Scope demonstration
  try {
    {
      let blockVar = 'I live inside the block';   // block scoped
    }
    console.log(blockVar);                         // accessed outside the block -> error
  } catch (error) {
    console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
  }

  // Function scope: a var declared inside a function is not visible outside it
  function functionScopeDemo() {
    var functionVar = 'I live inside the function';
    return functionVar;
  }
  try {
    functionScopeDemo();
    console.log(functionVar);
  } catch (error) {
    console.log(`Function Scope Error: ${error.name}: ${error.message} (when accessed outside function)`);
  }
})();
