const express=require('express')
const router=express.Router()




const {registerRules,loginRules,validation}=require('../middleware/authValidator')
const isAuth=require('../middleware/passport')
const isBanned=require('../middleware/isBanned')
const controllers =require('../controllers/user')
const Bag =require('../models/bag')
//cust register  
router.post("/register", registerRules(), validation,controllers.register)
//router.post('/activation', controllers.activateEmail)

//login as cust
router.post('/signin',loginRules(),validation,isBanned,controllers.login)

//current
{/*router.get('/current',isAuth(),controllers.current)
*/}
router.get('/current',isAuth(),(req,res)=>{
    res.send({user:req.user})
   })


module.exports=router