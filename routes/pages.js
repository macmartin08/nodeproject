const router = require('express').Router();
const PagesController = require('../controllers/PagesController');
router.get(`/`, PagesController.show);
router.get(`/contact`, PagesController.show);
module.exports = router;