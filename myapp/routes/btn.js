var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('btnclicked', { title: 'Button Clicked' });
});

module.exports = router;
