// src/services/scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape the price from Yahoo Finance based on the symbol
const getPriceFromYahoo = async (symbol) => {
  try {
    // Fetch the Yahoo Finance page for the given symbol
    const { data } = await axios.get(`https://finance.yahoo.com/quote/${symbol}/`);
    const $ = cheerio.load(data);

    // Scrape the price inside the span within the fin-streamer tag
    const price = $('fin-streamer.livePrice span').text();

    if (!price) {
      throw new Error('Price not found');
    }

    return price;
  } catch (error) {
    throw new Error('Error scraping the price');
  }
};

module.exports = { getPriceFromYahoo };
