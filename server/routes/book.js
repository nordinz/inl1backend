const router = require('express').Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.get);
router.put('/:id', bookController.update);
router.post('/', bookController.create);
router.delete('/:id', bookController.remove);
// router.get('/search', bookController.search);

module.exports = router;
