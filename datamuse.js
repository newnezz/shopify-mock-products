const datamuse = require('datamuse');

async function getRelatedWords(word, limit) {
  try {
    const results = await datamuse.words({ ml: word, max: limit });
    return results.map((result) => result.word);
  } catch (error) {
    console.error('Error fetching related words:', error.message);
    return [];
  }
}

module.exports = {
  getRelatedWords,
};


/**
 * Note that the Datamuse API documentation mentions that setting the 
 * max parameter to a large number (e.g., 1000) can result in slower 
 * response times or errors, depending on the query. So it's generally 
 * a good idea to keep the max parameter at a reasonable number to avoid performance issues.
 */