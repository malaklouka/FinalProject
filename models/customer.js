const mongoose=require('mongoose')
const customerSchema= new mongoose.Schema({
    email:{
        type:String,
        required:"email is required"
        },
        password:{
            type:String,
            required:"password is required"
        },
        name:{
            type:String
        },
        isCustomer:{
            type:Boolean,
            default:true
        }
})
module.exports=Customer=mongoose.model("customer",customerSchema)
