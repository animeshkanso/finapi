const cheerio = require('cheerio');
const axios = require('axios');

// Fetch the webpage
axios.get('https://finance.yahoo.com/quote/ETH-USD/')
  .then(response => {
    const html = response.data;  // Get HTML from the response
    const $ = cheerio.load(html);  // Load HTML into Cheerio

    // Select the <span> inside the <fin-streamer> tag with the class 'livePrice'
    const livePrice = $('fin-streamer.livePrice span').text();
    
    console.log('Live Price:', livePrice);  // Output the price
  })
  .catch(error => {
    console.error('Error fetching the webpage:', error);
  });
