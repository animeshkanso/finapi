// src/controllers/priceController.js
const scraper = require('../services/scraper');

const getPrice = async (req, res) => {
  const { symbol } = req.query; // Extract the 'symbol' parameter from query
  if (!symbol) {
    return res.status(400).json({ error: 'Symbol query parameter is required' });
  }

  try {
    // Call the scraping service with the symbol
    const price = await scraper.getPriceFromYahoo(symbol);
    res.json({ symbol, price });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the price' });
  }
};

module.exports = { getPrice };
