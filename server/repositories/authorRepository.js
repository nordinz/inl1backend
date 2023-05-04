const db_context = require('../db_context');

async function getAllAuthors() {
  let data = await db_context.selectAllAuthors();

  return data;
}

async function searchAuthor(keyword) {
  let data = await db_context.searchAuthor(keyword);
  return data;
}
module.exports = {
  getAllAuthors,
  searchAuthor,
};
