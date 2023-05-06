const {
  getAllAuthors,
  searchAuthor,
} = require('../repositories/authorRepository');

async function get(req, res) {
  let data = await getAllAuthors();
  return res.json(data);
}

async function search(req, res) {
  const { q } = req.query;
  let data = await searchAuthor(q);
  return res.json(data);
}

module.exports = {
  get,
  search,
};
