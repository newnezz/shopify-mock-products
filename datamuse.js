const datamuse = require('datamuse');

async function getRelatedWords(word) {
  try {
    const results = await datamuse.words({ ml: word });
    return results.map((result) => result.word);
  } catch (error) {
    console.error('Error fetching related words:', error.message);
    return [];
  }
}

module.exports = {
  getRelatedWords,
};
