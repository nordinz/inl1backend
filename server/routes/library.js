const express = require('express');
const router = express.Router();
const library = require('../controllers/libraryController');

router.get('/all', async (req, res) => {
  library.get(req, res);
});

// router.post('/create', async (req, res) => {
//   await controller.add(req, res);
// });

module.exports = router;
