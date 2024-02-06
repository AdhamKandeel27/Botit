const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordersController');

router.get('/orders', orderController.getAllOrders);

router.get('/orders/:id', orderController.getOrderById);

router.get('/filteredOrders', orderController.getFilteredOrders);

router.post('/orders', orderController.createOrder);

router.put('/orders/:id', orderController.updateOrderById);



module.exports = router;
