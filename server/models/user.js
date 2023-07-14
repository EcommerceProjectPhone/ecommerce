
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
     email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'seller', 'client'),
      defaultValue: 'client'
    },
    profileUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coverUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio : DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'User'
  }
);

module.exports = User;
