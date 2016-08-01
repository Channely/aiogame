var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JAM' });
});

/* Ajax GET. /example */
router.get('/example', function(req, res) {
  res.send({ title: 'JAM' });
});

/* Ajax POST. /example */
router.post('/example', function(req, res) {
  res.send({ title: 'JAM' });
});

module.exports = router;
