const express = require('express');
const app = express();
const pageRoute = require('./routes/pages');
const beerRoute = require('./routes/beers');
app.use('/', pageRoute);
app.use('/beers',beerRoute);
module.exports = app;