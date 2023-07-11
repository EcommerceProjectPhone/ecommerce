const sequelize = require('../database/db');
const Client = require('./client');

const ShoppingCart = sequelize.define('shoppingCart', {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  });

  ShoppingCart.belongsTo(User, { foreignKey: 'userId' });
  ShoppingCart.belongsTo(Product, { foreignKey: 'productId' });
module.exports = ShoppingCart;
