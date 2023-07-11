const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const User = require('./user');

const Client = sequelize.define('client', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
});

Client.belongsTo(User);

module.exports = Client;
