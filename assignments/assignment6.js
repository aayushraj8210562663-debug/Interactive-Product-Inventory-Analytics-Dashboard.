// Assignment 6: Arrays, Objects, and Core Methods
(function () {
  if (typeof require === 'function') require('../prompt-shim.js');

  const products = [
    { name: 'Laptop', price: 800 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 45 },
  ];

  // forEach : print every product
  console.log('-- All Products (forEach) --');
  products.forEach((product) => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
  });

  // filter : products cheaper than $50
  console.log('-- Filtered Products (Price < $50) --');
  const affordable = products.filter((product) => product.price < 50);
  console.log(affordable);

  // map : create formatted strings
  console.log('-- Mapped Product Tags (map) --');
  const tags = products.map((product) => `${product.name.toUpperCase()} costs $${product.price}`);
  console.log('[ ' + tags.map((tag) => `"${tag}"`).join(', ') + ' ]');
})();
