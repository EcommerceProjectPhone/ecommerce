const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.ENUM('admin', 'seller', 'client'),
    defaultValue: 'client'
  },
  imgUrl : {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.hasMany(Product, { foreignKey: 'sellerId' });
User.hasMany(Rating, { foreignKey: 'userId' });
User.hasOne(ShoppingCart, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'clientId' });

module.exports = User;
