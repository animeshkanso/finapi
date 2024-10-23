// src/app.js
require('dotenv').config();
const express = require('express');
const priceRoute = require('./routes/priceRoute');

const app = express();
const PORT = process.env.PORT;

// Use routes
app.use('/api', priceRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
