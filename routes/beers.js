const router = require('express').Router();
const BeersController = require('../controllers/BeersController');

router.get(`/`, BeersController.index);
router.get(`/new`, BeersController.new);
router.get(`/:id`, BeersController.show);
//router.get(`/:id/edit`, BeersController.edit);
router.post(`/`, BeersController.create);
router.post(`/update`, BeersController.update);
//router.post(`/destroy`, BeersController.destroy);
// We have to export our changes
module.exports = router; 