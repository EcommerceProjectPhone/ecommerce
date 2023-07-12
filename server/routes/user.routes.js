const express = require('express');
const userController = require('../controllers/userController');
const isAuthenticate = require('../middleware/isAuth');

const router = express.Router();

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', isAuthenticate, userController.getUserById);

module.exports = router;
