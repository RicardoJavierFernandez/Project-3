const router = require('express').Router();
const usersController = require('../../controllers/usersControllers');

router.route('/')
    .post(usersController.create);

router.route('/login')
    .post(usersController.findByEmail);

module.exports = router;