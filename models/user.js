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
        enum: ["storekeeper", "customer","admin"],
        default:"customer"
    },
    gender:{
      type: String,
      enum:["female","male"]
    },
    dateofbirth:{
         type: Date
    },
    adresse:{
      type: String
    },
    avatar:{
         type: String
    },
    demande:{
      type:Array,
      default:[]
    },
    banned:{
      type:Boolean,
      default:false
    }
      
  })
module.exports=User=mongoose.model("user",userSchema)
