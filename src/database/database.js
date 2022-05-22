const config = require('../config');
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, { dialect: config.DB_TYPE });
