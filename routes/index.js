var express = require('express');
var router = express.Router();

const {TranslationServiceClient} = require('@google-cloud/translate');

const translationClient = new TranslationServiceClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/googletranslatetokor', function(req, res, next) {
  translationClient.translateText({
    contents: [req.body.text],
    targetLanguageCode: 'ko-KR',
    parent: `projects/strongai/locations/us-central1`,
    mimeType: 'text/plain',
  }).then(result => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.json(result);
  })
});

router.post('/googletranslatetoeng', function(req, res, next) {
  translationClient.translateText({
    contents: [req.body.text],
    sourceLanguageCode: 'ko-KR',
    targetLanguageCode: 'en',
    parent: `projects/strongai/locations/us-central1`,
    mimeType: 'text/plain',
  }).then(result => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.json(result);
  })
});


module.exports = router;
