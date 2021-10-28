const {check,validationResult}=require('express-validator')
exports.registerRules=()=>
    [
        check("email","email is required").notEmpty().isEmail(),
        check("password","password invalid").isLength({min:8,max:15})

    ]


exports.loginRules=()=>
    [
        check("email","email is required").notEmpty().isEmail(),
        check("password","password is invalid").isLength({min:8,max:15})

    ]

exports.validation=(req,res,next)=>{
const errors=validationResult(req)
if (!errors.isEmpty()){
    return res.status(400).send({errors:errors.array().map((elt)=>({msg:elt.msg,}))})

}
next()

}
