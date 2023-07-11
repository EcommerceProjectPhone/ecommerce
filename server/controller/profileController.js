const Sequelize = require('sequelize');
const {User , Product , Rating , ShoppingCart , Order} = require("../models/model")

const getUser = async(req,res)=>{
    try {
      const user =  User.findByPk(req.params.id)
      if(user){
        res.status(200).send(user)
      }
    } catch (error) {
        res.status(500).send(error)
    }
}

updateCover = async(req, res)=>{
    try {
        const user = User.update({cover:req.body.url},{where:{id:req.params.id}})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}
updateProfile = async(req, res)=>{
    try {
        const user = User.update({cover:req.body.url},{where:{id:req.params.id}})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {getUser,updateCover,updateProfile}