const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Seller = require('./seller');

const Product = sequelize.define('product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  stock: DataTypes.INTEGER,
  cover: DataTypes.STRING,
});

Product.belongsTo(User, { foreignKey: 'sellerId' });
Product.hasMany(Rating, { foreignKey: 'productId' });

module.exports = Product;
