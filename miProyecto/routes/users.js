var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/profile/:id', usersController.profile);
router.get('/editprofile/:id', usersController.editprofile)
router.post('/editprofile/:id', usersController.Posteditprofile)
router.get('/logout', usersController.logout)

module.exports = router;

