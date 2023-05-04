const db_context = require('../db_context');

async function getAllBooks() {
  let books = [];

  let data = await db_context.selectAllBooks();

  data.forEach((book) => {
    books.push(book);
  });

  return books;
}

async function updateBook(data) {
  return await db_context.updateBook(data);
}

async function createBook(data) {
  return await db_context.createBook(data);
}

async function removeBook(data) {
  return await db_context.removeBook(data);
}

module.exports = {
  getAllBooks,
  updateBook,
  createBook,
  removeBook,
};
