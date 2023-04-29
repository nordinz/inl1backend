const {
  getAllBooks,
  updateBook,
  createBook,
} = require('../repositories/bookRepository');

async function get(req, res) {
  let data = await getAllBooks();
  // return res.send('hej');
  return res.json(data);
}

async function update(req, res) {
  const { authorId, title, genre, releaseYear } = req.body;
  const bookId = req.params.id;

  if (!authorId || !title || !genre || !releaseYear) {
    return res.json('Plz fill ut all forms!');
  }
  const rowCount = await updateBook({
    authorId,
    title,
    genre,
    releaseYear,
    bookId,
  });
  if (rowCount !== 1) {
    return res.json({ message: 'HELVETE!' }).status(500);
  }
  return res.json({ message: 'Book updated successfully' }).status(200);
}

async function create(req, res) {
  const { authorId, title, genre, releaseYear } = req.body;

  if (!authorId || !title || !genre || !releaseYear) {
    return res.json('Plz fill ut all forms!');
  }
  const rowCount = await createBook({
    authorId,
    title,
    genre,
    releaseYear,
  });
  if (rowCount !== 1) {
    return res.json({ message: 'HELVETE!' }).status(500);
  }
  return res.status(201).json({ message: 'Book created successfully' });
}

module.exports = {
  get,
  update,
  create,
};
