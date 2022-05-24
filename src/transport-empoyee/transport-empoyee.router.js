const express = require('express');
const utilsService = require('./../utils/utils.service');
const router = express.Router();

const transportEmpoyeecontroller = require('./transport-empoyee.controller');

router.get('/transport-empoyee', transportEmpoyeecontroller.getAllTransportEmpoyee);

module.exports = router;
