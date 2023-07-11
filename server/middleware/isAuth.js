
const jwt = require('jsonwebtoken');
const { user } = require('../models');

// Middleware function to verify user authentication
const isAuthenticate = async (req, res, next) => {
  try {
    // Extract the authorization token from the request headers
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Verify the token
    const decoded = jwt.verify(token, 'your_secret_key'); // Replace 'your_secret_key' with your actual secret key

    // Retrieve the user from the decoded token
    const user = await user.findByPk(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    // Attach the user to the request object for further use in the route handlers
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = isAuthenticate;
