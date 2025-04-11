const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'ejercicio_api_sequelize',
  'root',                   
  'root',           
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = sequelize;
