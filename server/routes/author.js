const router = require('express').Router();
const authorController = require('../controllers/authorController');

router.get('/', authorController.get);
router.get('/search', authorController.search);

module.exports = router;
