const express = require('express');
const router = express.Router();
const library = require('../controllers/libraryController');

router.get('/', async (req, res) => {
  library.get(req, res);
});

module.exports = router;
