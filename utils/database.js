const Sequelize = require('sequelize');

const SCHEMA_NAME = 'school';
const USER_NAME = 'admin';
const PASSWORD = '123456789';

const sequelize = new Sequelize(SCHEMA_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
