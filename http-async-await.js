const request = require('request-promise');

const getData = async () => {
  try {
    // 1ere requete
    const body = await request('https://pokeapix.co/api/v2/pokemon/');
    const data = JSON.parse(body);
    const bulbasaurUrl = data.results[0].url;

    // 2nde requete
    const detailsBody = await request(bulbasaurUrl);
    const details = JSON.parse(detailsBody);
    console.log(details.base_experience);

  } catch (err) {
    console.error('An error occurred', err.message);

    await sendEmailToAdmin(err.message);
  }
  console.log('Done');
}

getData();