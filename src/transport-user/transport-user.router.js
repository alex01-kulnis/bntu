const express = require('express');
const utilsService = require('./../utils/utils.service');
const router = express.Router();

const transportUsercontroller = require('./transport-user.conroller');

router.get('/transport-user', transportUsercontroller.getAllTransportUser);
router.post('/create-transport-user', transportUsercontroller.createTransport);

module.exports = router;
