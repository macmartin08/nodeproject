const Beer = require('../models/beer');

exports.index = (req, res) => {
  Beer.find()
    .then(beers => {
      res.render('beers/index', {
        beers: beers,
        title: 'Archive'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
}


exports.show = (req, res) => {}


exports.new = (req, res) => {
	res.render('beers/new', {
      });
}


exports.create = (req, res) => {
	Beer.create(req.body.beer)
    .then(() => {
      res.redirect('/beers');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
  };


exports.update = (req, res) => {
  console.log("done1");
  Beer.updateOne(req.body.id
    , req.body.beer, {
      runValidators: true
    })
    .then(() => {
      res.redirect('/beers');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};