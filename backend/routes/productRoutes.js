const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

router.get('/products', productController.getAllProducts);

router.get('/products/:id', productController.getProductById);

router.post('/products', productController.createProduct);

router.put('/products/:id', productController.updateProductById);



module.exports = router;
