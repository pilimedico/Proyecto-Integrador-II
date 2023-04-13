var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/detalle/id/:id', productsController.detalle);
router.get('/add',productsController.add);


module.exports = router;