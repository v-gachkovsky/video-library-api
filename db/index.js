const Sequelize = require('sequelize');
const process = require('process');

const config = require('./config');

const currentEnv = process.env.NODE_ENV;
const environment = currentEnv || 'development';

module.exports = new Sequelize(
  config[environment].database,
  config[environment].username,
  config[environment].password, {
    host: config[environment].hostname,
    dialect: config.dialect,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
