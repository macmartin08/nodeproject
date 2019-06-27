

exports.index = (req, res) => {}


exports.show = (req, res) => {}


exports.drafts = (req, res) => {}


exports.published = (req, res) => {}


exports.new = (req, res) => {
  console.log("done");
	res.render('beers/new', {
      });
}


exports.create = (req, res) => {
	Blog.create(req.body.blog)
    .then(() => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
}