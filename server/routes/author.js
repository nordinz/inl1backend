const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('author router is alive!');
});

module.exports = router;
