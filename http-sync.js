const requestSync = require('request-sync');

const initialTime = Date.now();

const response = requestSync('http://www.example.com');
const timeAfterReq = Date.now();

console.log(response.body);

console.log(timeAfterReq - initialTime);