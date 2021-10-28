const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
  name:{
      type:String
    },

  surname:{
      type:String
    },

  email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        required: false,
        enum: ["storekeeper", "customer"],
        default:"customer"
    },
    demande:{
      type:Array,
      default:[]
    }
      
  })
module.exports=User=mongoose.model("user",userSchema)
