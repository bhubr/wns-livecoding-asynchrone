const request = require('request-promise');

request('https://pokexapi.co/api/v2/pokemon/')
  .then(body => {
    const data = JSON.parse(body);
    const bulbasaurUrl = data.results[0].url;
    return request(bulbasaurUrl);
  })



  .then(body => {
    const data = JSON.parse(body);
    console.log(data.base_experience);
  })
  .catch(err => {
    console.error('An error occurred', err.message);
  });