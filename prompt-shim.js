// prompt-shim.js
// Gives Node.js a browser-like prompt(message, defaultValue).
// - Interactive terminal: waits for typed input (Enter keeps the default).
// - Non-interactive run (piped / CI): uses the default value automatically.
const fs = require('fs');

if (typeof globalThis.prompt === 'undefined') {
  globalThis.prompt = function (message, defaultValue = '') {
    process.stdout.write(`${message} [${defaultValue}]: `);
    if (!process.stdin.isTTY) {
      console.log(defaultValue);
      return String(defaultValue);
    }
    const buffer = Buffer.alloc(1024);
    let bytes = 0;
    try {
      bytes = fs.readSync(0, buffer, 0, buffer.length, null);
    } catch (err) {
      return String(defaultValue);
    }
    const answer = buffer.toString('utf8', 0, bytes).trim();
    return answer === '' ? String(defaultValue) : answer;
  };
}
