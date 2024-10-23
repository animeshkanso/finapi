// src/routes/priceRoute.js
const express = require('express');
const router = express.Router();
const priceController = require('../controller/priceController');

// Route to handle fetching price with a symbol as a query parameter
router.get('/price', priceController.getPrice);

module.exports = router;
