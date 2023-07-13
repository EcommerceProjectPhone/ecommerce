const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const authMiddleware = require('../middleware/isAuth');

const signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role
    });

    // Generate token
    const token = jwt.sign({ userId: user.id, role: user.role }, 'your_secret_key', {
      expiresIn: '1h'
    });

    // Set the token as a cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000 // 1 hour in milliseconds
    });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate token
    const token = jwt.sign({ userId: user.id, role: user.role }, 'your_secret_key', {
      expiresIn: '1h'
    });

    // Set the token as a cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000 // 1 hour in milliseconds
    });

    res.json({ user, token });
  } catch (error) {
    console.error('Signin Error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const getProtectedData = async (req, res) => {
  try {
    res.json({ message: 'This is protected data!' });
  } catch (error) {
    console.error('Protected Data Error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  signup,
  signin,
  getProtectedData
};
