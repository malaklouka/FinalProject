const User=require('../models/user')


const isCust =async (req, res, next) => {
  try {
    const user=await User.findOne({_id:req.user.id})
    
    if ( user && user.role === "customer") {
      next();
    } 
  } catch (error) {
    res.status(400).send({msg:error})
  }

  }
  module.exports = {isCust}