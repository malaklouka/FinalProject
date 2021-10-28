const User=require('../models/user')


const isStorek =async (req, res, next) => {
  try {
    const user=await User.findOne({_id:req.user.id})
    
    if (user && user.role === "storekeeper") {
      next();
    } 
  } catch (error) {
    res.status(400).send({msg:error})
  }

  }
  module.exports = {isStorek}