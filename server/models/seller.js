const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const User = require('./user');

const Seller = sequelize.define('seller', {
  companyName: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
});

Seller.belongsTo(User);

module.exports = Seller;
