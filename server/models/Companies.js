const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const Product = require('./product')
const User = require('./user')

const Companies = sequelize.define('companies', {
  company: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  review: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  Image: DataTypes.STRING,
  sales:DataTypes.STRING,
})

Companies.belongsTo(User)
Companies.belongsTo(Product)

module.exports = Companies
  