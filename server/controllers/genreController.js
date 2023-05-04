const { getAllGenres } = require('../repositories/genreRepository');

async function get(req, res) {
  let data = await getAllGenres();
  return res.json(data);
}

module.exports = {
  get,
};
