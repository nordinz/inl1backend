const router = require('express').Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.get);
router.put('/:id', bookController.update);
router.post('/', bookController.create);

module.exports = router;
