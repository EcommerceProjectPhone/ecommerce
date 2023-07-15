const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const User = require('./user');

const Product = sequelize.define('product', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  stock: DataTypes.INTEGER,
  imageUrl: DataTypes.STRING,
});

User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });


module.exports = Product;
