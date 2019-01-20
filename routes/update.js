

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/crud/update', function(req, res, next) {
  res.send("Create Operatin");
});

module.exports = router