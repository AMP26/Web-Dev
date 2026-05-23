const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

router.get('/:id', productController.getProductById);
router.get('/', productController.getProducts);
router.post('/', productController.addProduct);

module.exports = router;