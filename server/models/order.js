const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Client = require('./client');

const Order = sequelize.define('order', {
  orderDate: DataTypes.DATE,
  totalAmount: DataTypes.DECIMAL(10, 2),
  shippingAddress: DataTypes.STRING,
  paymentStatus: DataTypes.STRING,
});

Order.belongsTo(Client);

module.exports = Order;
