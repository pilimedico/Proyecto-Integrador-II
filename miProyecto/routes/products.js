var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/detalle/id/:id', productsController.detalle);
router.post('/detalle/id/:id', productsController.detalleComment);
router.get('/add',productsController.add);
router.post('/add',productsController.postAdd); //para procesar el formulario
router.get('/edit/:id',productsController.edit);
router.post('/edit/:id',productsController.Postedit);
router.post('/delete/:id',productsController.PostDelete);
router.post('/likes',productsController.postLikes);

module.exports = router;