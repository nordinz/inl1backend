const db_context = require('../db_context');

async function getAllGenres() {
  let data = await db_context.selectAllGenres();

  return data;
}

module.exports = {
  getAllGenres,
};
