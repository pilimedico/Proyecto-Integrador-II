var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/detalle', productsController.detalle);
router.get('/add',productsController.add);
// router.get('/edit',productsController.edit);

module.exports = router;