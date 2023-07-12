const express = require('express');
const userController = require('../controllers/userController');
const isAuthenticate = require('../middleware/isAuth');

const router = express.Router();

// User routes
router.post('/create', userController.createUser);
router.post('/login', userController.login);
router.get('/:id', isAuthenticate, userController.getUserById);

// Authorized route example for admins
router.get('/admin', isAuthenticate,userController.getAdminData);

module.exports = router;
