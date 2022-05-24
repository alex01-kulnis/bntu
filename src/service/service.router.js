const express = require('express');
const utilsService = require('./../utils/utils.service');
const router = express.Router();

const serviceController = require('./service.controller');

router.get('/services', serviceController.getAllServices);

module.exports = router;
