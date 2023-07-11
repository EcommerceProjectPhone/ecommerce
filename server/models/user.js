const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('user', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
});

module.exports = User;