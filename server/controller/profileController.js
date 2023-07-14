const Sequelize = require('sequelize');
const { User, Product, Rating, ShoppingCart, Order } = require('../database-mysql/model')

const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user) {
      res.status(200).send(user)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateCover = async (req, res) => {
  try {
    const [rowsAffected] = await User.update(
      { coverUrl: req.body.url },
      { where: { id: req.params.id } }
    );
    if (rowsAffected === 0) {
      return res.status(404).send('User not found');
    }
    const updatedUser = await User.findByPk(req.params.id);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const [rowsAffected] = await User.update(
      { profileUrl: req.body.url },
      { where: { id: req.params.id } }
    );
    if (rowsAffected === 0) {
      return res.status(404).send('User not found');
    }
    const updatedUser = await User.findByPk(req.params.id);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};


const editProfile = async (req, res) => {
  try {
    if (req.body.username) {
      await User.update({ username: req.body.username }, { where: { id: req.params.id } })
    }
    if (req.body.bio) {
      await User.update({ bio: req.body.bio }, { where: { id: req.params.id } })
    }
    const updatedUser = await User.findByPk(req.params.id);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports = { getUser, updateCover, updateProfile, editProfile }