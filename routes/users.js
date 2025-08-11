var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/marhbe', function(req, res, next) {
  res.json('marhba bikom nas lkoll');
});

module.exports = router;
