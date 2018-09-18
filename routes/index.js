var express = require('express');
var router = express.Router();

const scrapper = require('../site-scrapper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/site-content/:url', async (req, res, next) => {
    console.log(req.params.url);
    const url = decodeURIComponent(req.params.url);
    const body = await scrapper.getSiteContent(url);
    res.send(body);
});

module.exports = router;
