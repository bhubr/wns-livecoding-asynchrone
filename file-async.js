const fs = require('fs');

console.log('avant lecture');
fs.readFile('exemple.txt', 'utf8', (err, text) => {
  console.log(text);
});

console.log('après lecture');
