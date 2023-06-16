var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/profile/:id', usersController.profile);
router.get('/editprofile/:id', usersController.editprofile) //queremos que se vea el formulario via GET
router.post('/editprofile/:id', usersController.Posteditprofile) //procesamos el formulario de editar el perfil via POST  
router.get('/logout', usersController.logout)

module.exports = router;

