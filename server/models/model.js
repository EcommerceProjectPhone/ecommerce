const Sequelize = require('sequelize');
const sequelize = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'mysql',
});

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

const Rating = sequelize.define('rating', {
  value: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const ShoppingCart = sequelize.define('shoppingCart', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

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

User.hasMany(Product, { foreignKey: 'sellerId' });
User.hasMany(Rating, { foreignKey: 'userId' });
User.hasOne(ShoppingCart, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'clientId' });

Product.belongsTo(User, { foreignKey: 'sellerId' });
Product.hasMany(Rating, { foreignKey: 'productId' });

Rating.belongsTo(User, { foreignKey: 'userId' });
Rating.belongsTo(Product, { foreignKey: 'productId' });

ShoppingCart.belongsTo(User, { foreignKey: 'userId' });
ShoppingCart.belongsTo(Product, { foreignKey: 'productId' });

Order.belongsTo(User, { foreignKey: 'clientId' });

sequelize.sync()
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch(error => {
    console.error('Error', error);
  });

module.exports = {
  User,
  Product,
  Rating,
  ShoppingCart,
  Order
};
