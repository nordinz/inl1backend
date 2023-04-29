require('dotenv').config();
const pgp = require('pg-promise')(/* options */);
const db = pgp(
  `postgres://${process.env.DB_PASSWORD}:postgres@localhost:5432/librarydb`
);

function selectAllBooks() {
  return db.many('SELECT * FROM book');
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

module.exports = {
  selectAllBooks,
  updateBook,
  createBook,
};
