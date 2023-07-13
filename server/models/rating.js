const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Client = require('./client');
const Product = require('./product');

const Rating = sequelize.define('rating', {
  value: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


Rating.belongsTo(User, { foreignKey: 'userId' });
Rating.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Rating;
