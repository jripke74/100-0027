const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

rourter.get('/', function(req, res) {
  res.redirect('/products')
});

module.exports = router;
