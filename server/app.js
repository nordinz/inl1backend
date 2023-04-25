const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const libraryRouter = require('./routes/libraryRouter');
app.use('/', libraryRouter);

app.listen(3000);
