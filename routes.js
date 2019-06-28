const express = require('express');
const app = express();
const pageRoute = require('./routes/pages');
const beerRoute = require('./routes/beers');
const brandRoute = require('./routes/brand');
app.use('/', pageRoute);
app.use('/beers',beerRoute);
app.use('/brands',brandRoute);
module.exports = app;