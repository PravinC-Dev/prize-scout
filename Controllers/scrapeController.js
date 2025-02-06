// server/controllers/scrapeController.js
const { scrapeAmazon, scrapeFlipkart } = require('../utils/scrapingUtils');

// Controller function to handle the search request
const searchProducts = async (req, res) => {
    try {
        const { query } = req.query; // Get the search query from request

        if (!query) {
            return res.status(400).json({ message: 'Query parameter is required' });
        }

        const amazonResults = await scrapeAmazon(query);
        const flipkartResults = await scrapeFlipkart(query);

        // You can combine both results or return them separately
        const combinedResults = { amazonResults, flipkartResults };

        return res.status(200).json(combinedResults);
    } catch (error) {
        return res.status(500).json({ message: 'Error occurred while scraping data', error: error.message });
    }
};

module.exports = { searchProducts };
