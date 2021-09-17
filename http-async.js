const request = require('request');

const initialTime = Date.now();

console.log('avant lancement requête');

request('http://www.example.com', (error, response, body) => {
  const timeAfterReq = Date.now();
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(timeAfterReq - initialTime);
});

console.log('après lancement requête');