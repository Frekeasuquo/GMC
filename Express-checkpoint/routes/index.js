var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todays news', subtitle: 'Welcome to the home page of best news site', subtitle2: 'Please check our: ' });
});





module.exports = router;
