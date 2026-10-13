# JavaScript Assignments & Capstone Mini Project

Six practical assignments plus the capstone project **Interactive Product Inventory & Analytics Dashboard**.

## Project structure
```
javascript-mini-project/
├── index.html                 # browser runner (buttons + on-page console)
├── run-all.js                 # runs everything in Node.js
├── prompt-shim.js             # makes prompt() work in Node.js
├── package.json
├── assignments/
│   ├── assignment1.js         # Variables, data types, console
│   ├── assignment2.js         # Operators, expressions, input handling
│   ├── assignment3.js         # if...else, switch, ternary
│   ├── assignment4.js         # for, while + break, do...while + continue
│   ├── assignment5.js         # Functions, arrow functions, scope
│   └── assignment6.js         # Arrays, objects, forEach / filter / map
└── mini-project/
    └── inventory.js           # Capstone project
```

## How to run

**In the browser (recommended – `prompt()` works natively):**
Open `index.html` and click a *Run* button.

**In Node.js (v14+):**
```bash
node assignments/assignment1.js      # any single file
node mini-project/inventory.js       # the capstone
node run-all.js                      # everything, in order
```
In a terminal, `prompt()` waits for your typing (press Enter to keep the value shown in brackets). When output is piped, the default values are used automatically.

## Concepts used
| Concept | Where |
|---|---|
| `var`, `let`, `const`, `typeof` | Assignment 1 |
| `prompt()`, `Number()`, arithmetic & assignment operators | Assignment 2, capstone |
| `if...else`, `switch`, ternary | Assignment 3, capstone (`getCategory`, validation) |
| `for`, `while` + `break`, `do...while` + `continue` | Assignment 4, capstone (input retry, search) |
| Functions, arrow functions, default parameters, scope | Assignment 5, capstone (`priceWithAdjustments`, `calculateTotal`) |
| `forEach`, `filter`, `map`, `reduce` | Assignment 6, capstone |

## Capstone behaviour
- Starts with Laptop ($800) and Mouse ($25), then asks for a new product name and price (default: Monitor, $150).
- Invalid input (empty name, non-numeric / zero / negative price, duplicate name) is rejected with `continue`; after 3 failed attempts the loop stops with `break`.
- Category badges: **Budget** under $50, **Standard** under $500, **Premium** $500 and above.
- Prints the roster, total inventory value, affordable items (under $200), a formatted report, and prices after a custom tax / discount.
