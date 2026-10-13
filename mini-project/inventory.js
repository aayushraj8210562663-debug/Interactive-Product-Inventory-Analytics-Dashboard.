// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard
(function () {
  if (typeof require === 'function') require('../prompt-shim.js');

  console.log('--- Initializing Inventory System ---');

  // ---------- 1. Data & input initialisation ----------
  const inventory = [
    { name: 'Laptop', price: 800 },
    { name: 'Mouse', price: 25 },
  ];

  // Thresholds used for category badges
  const BUDGET_LIMIT = 50;
  const PREMIUM_LIMIT = 500;

  // ---------- 2. Control flow: validation + category badge ----------
  function getCategory(price) {
    switch (true) {
      case price < BUDGET_LIMIT:
        return 'Budget';
      case price < PREMIUM_LIMIT:
        return 'Standard';
      default:
        return 'Premium';
    }
  }

  function isDuplicate(name) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  // ---------- 3. Loops with break / continue for bad input ----------
  function readNewProduct(maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const rawName = prompt('Enter new product name:', 'Monitor');
      const rawPrice = prompt('Enter product price ($):', '150');

      if (rawName === null || rawPrice === null) {   // user pressed Cancel in the browser
        console.log('Input cancelled.');
        break;
      }

      const name = rawName.trim();
      const price = Number(rawPrice);                // explicit conversion

      if (name === '') {
        console.log(`Attempt ${attempt}: product name cannot be empty.`);
        continue;
      }
      if (rawPrice.trim() === '' || Number.isNaN(price) || price <= 0) {
        console.log(`Attempt ${attempt}: price must be a number greater than 0.`);
        continue;
      }
      if (isDuplicate(name)) {
        console.log(`Attempt ${attempt}: "${name}" already exists in the inventory.`);
        continue;
      }
      return { name, price };
    }
    console.log('No valid product added.');
    return null;
  }

  const newProduct = readNewProduct();
  if (newProduct) {
    inventory.push(newProduct);
    console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
  }

  // ---------- 5. forEach : inventory sheet ----------
  console.log('--- Processing Inventory Roster (forEach) ---');
  inventory.forEach((item) => {
    item.category = getCategory(item.price);
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${item.category}`);
  });

  // ---------- 4. Functions & scope: arrow functions ----------
  const calculateTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);

  // taxRate and discountRate are default parameters; finalPrice is local to the function
  const priceWithAdjustments = (price, taxRate = 0, discountRate = 0) => {
    const finalPrice = price + (price * taxRate) / 100 - (price * discountRate) / 100;
    return Number(finalPrice.toFixed(2));
  };

  const asList = (arr) => '[' + arr.map((x) => `"${x}"`).join(', ') + ']';

  console.log('--- Financial Analytics ---');
  console.log(`Total Inventory Value: $${calculateTotal(inventory)}`);

  // filter + map
  const affordableNames = inventory.filter((item) => item.price < 200).map((item) => item.name);
  console.log(`Filtered Affordable Items (Under $200): ${asList(affordableNames)}`);

  const report = inventory.map((item) => `${item.name.toUpperCase()}: $${item.price}`);
  console.log(`Formatted Report List: ${asList(report)}`);

  // Extra: custom tax / discount parameters
  console.log('--- Price After 18% Tax and 10% Discount ---');
  inventory.forEach((item) => {
    console.log(`${item.name}: $${item.price} -> $${priceWithAdjustments(item.price, 18, 10)}`);
  });

  // Extra: loop with break to search the inventory
  function findProduct(name) {
    let foundIndex = -1;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
        foundIndex = i;
        break;                                       // stop searching once found
      }
    }
    return foundIndex;
  }
  console.log('--- Search ---');
  const idx = findProduct('Mouse');
  console.log(idx >= 0 ? `"Mouse" found at position ${idx + 1}` : '"Mouse" not found');
})();
