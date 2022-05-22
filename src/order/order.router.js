const express = require('express');
const utilsService = require('./../utils/utils.service');
const router = express.Router();

const orderController = require('./order.controller');

router.get('/order', utilsService.dispatchErrors(orderController.getAll));
router.post('/create-order', utilsService.dispatchErrors(orderController.createOrder));

module.exports = router;
