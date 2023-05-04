const {
  getAllAuthors,
  searchAuthor,
} = require('../repositories/authorRepository');

async function get(req, res) {
  let data = await getAllAuthors();
  return res.json(data);
}

async function search(req, res) {
  let data = await searchAuthor(req.body.keyword);
  // console.log(req.body, req.body.keyword);

  return res.json(data);
}

module.exports = {
  get,
  search,
};
