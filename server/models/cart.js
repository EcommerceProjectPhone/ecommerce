const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Client = require('./client');

const Cart = sequelize.define('cart', {});

Cart.belongsTo(Client);

module.exports = Cart;
