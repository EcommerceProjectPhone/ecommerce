const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Seller = require('./seller');
const Category = require('./category');

const Product = sequelize.define('product', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  stock: DataTypes.INTEGER,
  imageUrl: DataTypes.STRING,
});

Product.belongsTo(Seller);
Product.belongsTo(Category);

module.exports = Product;
