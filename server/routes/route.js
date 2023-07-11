const router = require('express').Router();
 const {getUser,updateCover,updateProfile}=require("../controller/profileController")

 router.get('/:id',getUser)
 router.patch('/cover/:id',updateCover)
 router.patch("profile/:id",updateProfile)

 module.exports = router