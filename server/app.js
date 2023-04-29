const express = require('express');
const cors = require('cors');
// const libraryRouter = require('./routes/library');
const routes = require('./routes');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/books', routes.bookRouter);
app.use('/author', routes.authorRouter);

module.exports = app;
