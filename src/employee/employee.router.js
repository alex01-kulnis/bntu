const express = require('express');
const utilsService = require('./../utils/utils.service');
const router = express.Router();

const employeeController = require('./employee.controller');

router.get('/employee', employeeController.getAllEmployee);

module.exports = router;
