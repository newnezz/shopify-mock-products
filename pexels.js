const axios = require('axios');
require('dotenv').config();

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

async function searchImages(query) {
  const url = 'https://api.pexels.com/v1/search';

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query: query,
        per_page: 1,
        orientation: 'square',
        locale: 'en-US',
      },
    });
    console.log(`Pexels Total Calls: ${response.headers['x-ratelimit-limit']}`);
    console.log(`Pexels Remaining Calls: ${response.headers['x-ratelimit-remaining']}`);

    const unixTimestamp = response.headers['x-ratelimit-reset'];
    const date = new Date(unixTimestamp * 1000);
    const formattedDate = date.toLocaleString();
    console.log(`Pexels Reset Time ${formattedDate}`); // Output: "1/14/2023, 3:23:16 AM"


    return response.data.photos;
  } catch (error) {
    console.error('Error searching images:', error.message);
    return [];
  }
}

module.exports = {
  searchImages,
};
