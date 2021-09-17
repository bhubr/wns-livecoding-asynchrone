const request = require('request');

const initialTime = Date.now();

console.log('avant lancement requête');

// "callback hell"
request('https://pokeapi.co/api/v2/pokemon/', (error, response, body) => {
  if (error) {
    console.error('Error on 1st request', error);
    return;
  }
  const data = JSON.parse(response.body);
  const bulbasaurUrl = data.results[0].url;

  request(bulbasaurUrl, (error, response, body) => {
    if (error) {
      console.error('Error on 2nd request', error);
      return;
    }
    const data = JSON.parse(response.body);
    console.log(data);
  });
});
