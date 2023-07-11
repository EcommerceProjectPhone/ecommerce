const sequelize = require('../database/db');
const Client = require('./client');


const Order = sequelize.define('order', {
  totalAmount: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'pending'
  }
});

Order.belongsTo(User, { foreignKey: 'clientId' });

module.exports = Order;
