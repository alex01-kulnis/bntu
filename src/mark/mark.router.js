const express = require('express');
const utilsService = require('./../utils/utils.service');
const router = express.Router();

const markController = require('./mark.controller');

router.get('/marks', markController.getAllMarks);

module.exports = router;
