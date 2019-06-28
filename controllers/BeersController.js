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


exports.show = (req, res) => {
  Beer.findById(
    req.params.id)
  .then(beers => {
    res.render('beers/show',{
      beer: beers,
      title: beers.name
    });
  })
  .catch(err => {
      console.error(`ERROR: ${err}`);
    });
}


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

exports.edit = (req, res) => {
  Beer.findById(req.params.id)
    .then(beers => {
      res.render('beers/edit', {
        title: `Edit ${beers.name}`,
        beer: beers
      })
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.update = (req, res) => {
  Beer.updateOne({
      _id: req.body.id
    }, req.body.beer, {
      runValidators: true
    })
    .then(() => {
      res.redirect('/beers');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.destroy = (req, res) => {
  Beer.deleteOne(req.body.id)
    .then(() => {
      res.redirect('/beers');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};