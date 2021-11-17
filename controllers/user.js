const User = require("../models/user");
const Profile=require('../models/profile')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer=require('multer')

const storage= multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,"uploads/")
  }, 
  filename:function(req,file, callback){
    callback(null, file.originalname)
  }
})
//verif image type : png/jpeg
const fileFilter=(req,file,cb)=>{
  if(file.mimetype==='image/jpeg' || file.mimetype==='image/png'){
    cb(null,true)}
    else {
      cb(null,false)
    }
  }

const upload=multer({storage:storage, fileFilter:fileFilter})
{/*const {google} = require('googleapis')
const {OAuth2} = google.auth
const fetch = require('node-fetch');
const sendEmail = require("./sendmail");


const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)

const {CLIENT_URL} = process.env */}


exports.register = async (req, res) => {
    const {name, surname,email,password,gender,adresse,dateofbirth,role}=req.body
    const avatar= req.file.originalname
      try {
           const newUser= new User({name, surname,email,password,gender,adresse,dateofbirth,avatar,role})
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


  {/*  const activation_token = createActivationToken(newUserToken)

    const url = `${CLIENT_URL}/user/activate/${activation_token}`
    sendEmail(email, url, "Verify your email address")
  */}
      //save user 

res.status(200).send({newUserToken, msg:"user is saved",token:`Bearer ${token}`})
    }  catch (error) {
        console.dir(error)

        res.status(500).send("mail or password incorrect")
    }
}

{/*exports.activateEmail= async (req, res) => {
    try {
        const {activation_token} = req.body
        const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

        const {name, email, password} = user

        const check = await Users.findOne({email})
        if(check) return res.status(400).json({msg:"This email already exists."})

        const newUser = new Users({
            name, email, password
        })

        await newUser.save()

        res.json({msg: "Account has been activated!"})

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},*/}


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
     { /*  const refresh_token = createRefreshToken({id: user._id})
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7 days
            })*/}

        //send cust
        console.log(searchedUser)

        res.status(200).send({user:searchedUser,msg:"succes",token:`Bearer ${token}`})
    } catch (error) {
        res.status(500).send({msg:"cant sign in"})
    }
};

{/*

const createActivationToken = (payload) => {
    return jwt.sign(payload.toJSON(), process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
    return jwt.sign(payload.toJSON(), process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload.toJSON(), process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}*/}


  {/*exports.current = (req, res) => {
  res.status(200).send({ user: req.user });
}; */}