const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Client = require('./client');
const Product = require('./product');

const Rating = sequelize.define('rating', {
  rating: DataTypes.INTEGER,
  review: DataTypes.STRING,
  createdAt: DataTypes.DATE,
});

Rating.belongsTo(Client);
Rating.belongsTo(Product);

module.exports = Rating;
