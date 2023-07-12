const Sequelize = require('sequelize');
const sequelize = require('../database/db');
const bcrypt = require('bcrypt');

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
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Hash password before saving
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = User;
