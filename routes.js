const express = require('express');
const app = express();
const pageRoute = require('./routes/pages');
app.use('/', pageRoute);
module.exports = app;