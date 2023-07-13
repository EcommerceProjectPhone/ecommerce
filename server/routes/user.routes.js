// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/isAuth');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/protected', authMiddleware('admin'), userController.getProtectedData);

module.exports = router;
