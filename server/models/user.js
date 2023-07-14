const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database/db');


const User = sequelize.define('user', {
  username: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  role: {
    type: Sequelize.ENUM('admin', 'seller', 'client'),
    defaultValue: 'client',
  },
})

// const role = {
//   admin: 'admin',
//   seller: 'seller',
//   client: 'client',
// }
module.exports = User
