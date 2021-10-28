const express=require('express')
const customerrouter=express.Router()

const {registerRules,loginRules,validation}=require('../middleware/authValidator')
const isAuth=require('../middleware/passport')
const controllers =require('../controllers/user')
const isCust=require('../middleware/isCust')
//cust register  
customerrouter.post("/register", registerRules(), validation, controllers.register)

//login as cust
customerrouter.post('/signin',isCust,loginRules(),validation,controllers.login)

//current
customerrouter.get('/current',isAuth(),controllers.current)


module.exports=customerrouter