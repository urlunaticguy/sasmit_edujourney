// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is your backend app hosted on Vercel!');
});

module.exports = app; // Export the app for Vercel serverless functions
