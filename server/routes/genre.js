const router = require('express').Router();
const genreController = require('../controllers/genreController');

router.get('/', genreController.get);

module.exports = router;
