const { scrapeAmazon, scrapeFlipkart } = require('../utils/scrapingUtils');

const getProductDetails = async (req, res) => {
  const { productId } = req.params; // You can use this to fetch details of the product

  try {
    // Here, you can fetch the product details based on the productId
    // For now, we're just returning dummy data. You can modify this to return actual product data.
    const amazonResults = await scrapeAmazon("laptop");
    const flipkartResults = await scrapeFlipkart("laptop");

    const amazonProduct = amazonResults[productId] || {};
    const flipkartProduct = flipkartResults[productId] || {};

    const productDetails = {
      title: amazonProduct.title || "Product Title",
      amazonPrice: amazonProduct.price || "N/A",
      flipkartPrice: flipkartProduct.price || "N/A",
      rating: amazonProduct.rating || "N/A",
      reviewCount: amazonProduct.reviewCount || "N/A",
    };

    res.json(productDetails);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product details", error: err.message });
  }
};

module.exports = { getProductDetails };