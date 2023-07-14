const Order = require('../models/order.js');
const User = require('../models/user.js');

// Get all orders
const getAllOrders = (req, res) => {
  Order.findAll({
    include: [User], 
  })
    .then((orders) => {
      res.json(orders);
    })
    .catch((error) => {
      console.error('Error retrieving orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// // Assuming you have an Express route/controller file

// const User = require('path-to-your-User-model'); // Replace with the path to your User model

// // ...

// const users = {
//   getOneUser: (username, cb) => {
//     User.findOne({ where: { username } })
//       .then(result => {
//         cb(null, result);
//       })
//       .catch(err => {
//         cb(err, null);
//       });
//   }
// };

// // ...


// add a new order
const createOrder = (req, res) => {
  const { orderDate, totalAmount, shippingAddress, paymentStatus } = req.body;
  const { userId } = req.params;

  Order.create({
    orderDate: orderDate,
    totalAmount: totalAmount,
    shippingAddress: shippingAddress,
    paymentStatus: paymentStatus,
    userId: userId,
  })
    .then((order) => {
      res.json(order);
    })
    .catch((error) => {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};


// Update an order
const updateOrder = (req, res) => {
  const orderId = req.params.id;
  const { orderDate, totalAmount, shippingAddress, paymentStatus, userId } = req.body;

  Order.update(
    {
      orderDate: orderDate,
      totalAmount: totalAmount,
      shippingAddress: shippingAddress,
      paymentStatus: paymentStatus,
      userId: userId,
    },
    {
      where: {
        id: orderId,
      },
    }
  )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error updating order:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Delete an order
const deleteOrder = (req, res) => {
  const orderId = req.params.id;

  Order.destroy({
    where: {
      id: orderId,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
