const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

rourter.get('/products', function(req, res) {
  res.render('customer/products/all-products')
});

module.exports = router;
