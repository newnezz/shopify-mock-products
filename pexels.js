const axios = require('axios');
require('dotenv').config();

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

async function searchImages(query, perPage = 15) {
  const url = 'https://api.pexels.com/v1/search';

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query: query,
        per_page: perPage,
      },
    });

    return response.data.photos;
  } catch (error) {
    console.error('Error searching images:', error.message);
    return [];
  }
}

module.exports = {
  searchImages,
};
