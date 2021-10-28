const mongoose=require('mongoose')
const storekeeperSchema= new mongoose.Schema({
    storeName:{
        type:String,
        required:false
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
    location:{
        fullAdress: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        zipcode: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: false
        },  
      },
    note:{
            type:Number
    },
    isStorekeeper:{
        type:Boolean,
        default:true
    }
})
module.exports=StoreKeeper=mongoose.model("storekeeper",storekeeperSchema)
