require('dotenv').config();
const pgp = require('pg-promise')(/* options */);
const db = pgp(
  `postgres://${process.env.DB_PASSWORD}:postgres@localhost:5432/librarydb`
);

function selectAllBooks() {
  return db.many(`SELECT * 
  FROM book 
  INNER JOIN author 
  ON book.author_id = author.author_id
  INNER JOIN genre
  ON book.genre_id = genre.genre_id
  INNER JOIN quantity
  ON book.quantity_id = quantity.quantity_id`);
}

async function updateBook({ authorId, title, genre, releaseYear, bookId }) {
  const query = ` UPDATE book SET author_id = ${authorId}, 
                  title = '${title}', 
                  genre_id = ${genre},
                  release_year = ${releaseYear} 
                  WHERE 
                  book_id = ${bookId}`;
  const { rowCount } = await db.result(query);
  return rowCount;
}

async function createBook({ authorId, title, genre, releaseYear }) {
  const query = ` INSERT INTO book (author_id, title, genre_id, release_year)
  VALUES
    (${authorId},'${title}',${genre},${releaseYear})`;

  const { rowCount } = await db.result(query);
  return rowCount;
}

async function removeBook(bookId) {
  let result = await db.none(`DELETE FROM book WHERE book_id = '${bookId}'`);

  return result;
}

async function searchBook(keyword) {
  let data = await db.any(`SELECT * FROM book 
  INNER JOIN quantity
  ON book.quantity_id = quantity.quantity_id
  WHERE LOWER(title) 
  LIKE '${keyword.toLowerCase()}%'
  `);

  return data;
}

function selectAllAuthors() {
  return db.many('SELECT * FROM author');
}

async function searchAuthor(keyword) {
  let data = await db.any(
    `SELECT * FROM author WHERE LOWER(first_name) LIKE '${keyword.toLowerCase()}%' OR LOWER(last_name) LIKE '${keyword.toLowerCase()}%'`
  );
  console.log(data);

  return data;
}

function selectAllGenres() {
  return db.many(`SELECT * 
  FROM genre`);
}

module.exports = {
  selectAllBooks,
  updateBook,
  createBook,
  selectAllAuthors,
  removeBook,
  searchBook,
  searchAuthor,
  selectAllGenres,
};
