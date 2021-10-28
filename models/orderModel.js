const mongoose = require('mongoose');


const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  bag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bag',
    required: true
  },
})





const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          orderItems: [orderItemSchema],
          isAccepted:{
                      type:Boolean,
                     default:false
                      },
    
        
    })
    module.exports=Order=mongoose.model("order",orderSchema)