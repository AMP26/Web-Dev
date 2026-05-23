const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartsController');

router.get('/:id', cartController.getCartById);
router.post('/:id', cartController.addCartById);

module.exports = router;