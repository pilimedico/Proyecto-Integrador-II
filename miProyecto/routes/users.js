var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/profile', usersController.profile);
router.get('/editprofile', usersController.editprofile)

module.exports = router;
