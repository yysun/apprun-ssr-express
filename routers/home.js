var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { state: { title: 'Hello AppRun SSR' } });
});

module.exports = router;
