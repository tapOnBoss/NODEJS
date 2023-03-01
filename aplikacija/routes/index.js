const express = require('express');
const router = express.Router();
const productsController = require('../controlers/productsController');

router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);
router.get('/:Id', productsController.getProductById);
router.put('/:Id', productsController.updateProduct);
router.delete('/:Id', productsController.deleteProduct);
module.exports = router;