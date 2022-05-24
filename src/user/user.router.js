const express = require('express');
const utilsService = require('./../utils/utils.service');
const router = express.Router();

const userController = require('./user.controller');

router.get('/users', userController.getAllUsers);
router.post('/create-user', utilsService.dispatchErrors(userController.createUser));

module.exports = router;
