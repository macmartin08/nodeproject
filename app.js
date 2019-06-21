
const express = require('express');

const app = express();
app.get(`/`, (req, res) => { // res is the response object and req is the request object
 
 res.send(`Home`);
});
app.get(`/greeting`, (req, res) => {
 
 res.send(`Hey 'dere world!`);
});

app.listen(4000, () => console.log('Listening on 4000'));