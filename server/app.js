const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const libraryRouter = require('./routes/library');
app.use('/library', libraryRouter);

app.listen(3000);
