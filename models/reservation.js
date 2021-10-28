const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({

customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    unique: true
},
bag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bag',
    required: true,
    unique: true
},
isDone :{
    type:Boolean,
    default:false
},

  createDate:{
    type:String,
    default:Date.now()
}
})
   module.exports=Reservation=mongoose.model("reservation",reservationSchema)