// server/routes/scrapeRoutes.js
const express = require('express');
const { searchProducts } = require('../Controllers/scrapeController');
const router = express.Router();

// Route to handle product search
router.get('/search', searchProducts);

module.exports = router;
