const User = require('../models/user');

// Controller methods
const createUser = async (req, res) => {
  try {
    const { username, password, role, imgUrl } = req.body;
    const user = await User.create({ username, password, role, imgUrl });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user' });
  }
};

// Export controller methods
module.exports = {
  createUser,
  getUserById,
};
