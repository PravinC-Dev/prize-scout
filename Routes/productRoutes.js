// server/routes/productRoutes.js
const express = require('express');
const { getProductDetails } = require('../Controllers/ProductController');
const router = express.Router();

router.get('/:productId', getProductDetails);

module.exports = router;
