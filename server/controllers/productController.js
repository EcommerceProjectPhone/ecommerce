const Product = require('../models/product.js');
const cloudinary = require("../database/cloudConfig.js")

// Get all products
const getAllProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error('Error retrieving products:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Create a new product
const createProduct = (req, res) => {
  const { name, description, price, stock, imageUrl } = req.body;

  Product.create({
    name: name,
    description: description,
    price: price,
    stock: stock,
    imageUrl: imageUrl,
  })
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Update a product
const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, description, price, stock, imageUrl } = req.body;

  Product.update(
    {
      name: name,
      description: description,
      price: price,
      stock: stock,
      imageUrl: imageUrl,
    },
    {
      where: {
        id: productId,
      },
    }
  )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Delete a product
const deleteProduct = (req, res) => {
  const productId = req.params.id;

  Product.destroy({
    where: {
      id: productId,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

