var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */

//en el index principal van los productos
router.get('/', indexController.inicio);
router.get('/login', indexController.login )
router.get('/registrarse', indexController.register)
router.get('/results', indexController.results)

module.exports = router;
