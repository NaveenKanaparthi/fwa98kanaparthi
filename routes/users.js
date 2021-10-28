var express = require('express');
var router = express.Router();
var num = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  num++;
  res.send('Number of visits: '+num);
});

module.exports = router;
