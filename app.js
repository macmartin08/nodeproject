
const express = require('express');

const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/css', express.static('assets/css'));
app.use('/js', express.static('assets/js'));
app.use('/images', express.static('assets/images'));

const routes= require('./routes.js');
app.use('/',routes);

app.listen((process.env.PORT || 4000), () => console.log('Listening on 4000'));