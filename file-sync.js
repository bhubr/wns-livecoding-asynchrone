const fs = require('fs');

console.log('avant lecture');
const text = fs.readFileSync('exemple.txt', 'utf8');
console.log(text);
console.log('après lecture');
