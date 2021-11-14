var express = require('express');
var router = express.Router();
var autocompleteService = require('../services/autocomplete.service');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const text = req.query.text;
  if (!req.query.text) {
    return res.status(400).send('query not found')
  }
  const response = await autocompleteService.getPosts(text)
  res.send(response);
});

module.exports = router;
