const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    const {name, surname,email,password,role}=req.body
      try {
           const newUser= new User({name, surname,email,password,role})
   //check exist email
   const searchedUser=await User.findOne({email})
   if (searchedUser){
       return res.status(200).send({msg:"this email already exist"})
   }
   //hash password
   const salt=10
   const genSalt=await bcrypt.genSalt(salt)
   const hashedPassword=await bcrypt.hash(password,genSalt)
   console.log(hashedPassword)
   newUser.password=hashedPassword

    //save the user
const newUserToken=await newUser.save()

    //token
    const payload={
        _id:newUserToken._id,
        email:newUserToken.email,
    }
    const token=jwt.sign(payload,process.env.secretOrKey)
    console.log(token)

      //save user

res.status(200).send({newUserToken, msg:"user is saved",token:`Bearer ${token}`})
    }  catch (error) {
        console.dir(error)

        res.status(500).send("mail or password incorrect")
    }
}




exports.login = async (req, res) => {
    const {email,password}=req.body
    try {
        //if cust exist
        const searchedUser= await User.findOne({email})
        //if mail exist
        if (!searchedUser){
            return res.status(400).send({msg:"email not exist"})
        }
        //if password are equals
        const match=await bcrypt.compare(password,searchedUser.password)
        if (!match){
            return res.status(400).send({msg:"password incorrect"})
        }
        //create token 
        const payload={
            _id:searchedUser._id,
            
    
        } 
        const token=jwt.sign(payload,process.env.secretOrKey)
        //send cust
        console.log(searchedUser)

        res.status(200).send({user:searchedUser,msg:"succes",token:`Bearer ${token}`})
    } catch (error) {
        res.status(500).send({msg:"cant sign in"})
    }
};

{/*exports.current = (req, res) => {
  res.status(200).send({ user: req.user });
}; */}


