const express = require('express');
const { saveOrder, changeStatus, orderDelete, getAllOrders } = require('./Orders.controller');

const router = express.Router();

router.get('/', getAllOrders);
router.post('/saveOrder', saveOrder);
router.post('/changeStatus/:orderId', changeStatus);
router.get('/deleteOrder/:orderId', orderDelete);
module.exports = router;
