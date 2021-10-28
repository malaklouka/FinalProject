const mongoose = require('mongoose');

const demandeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
 // expire: { type: Date, required: true, default: Date.now, expires: "1d" },

  items: [
    {
      bag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bag'
      },
      quantity: {type: Number, default:1},
      price: {type:Number}

    }
  ]
},
{timestamps:true}

);



{/*const demandeItemSchema = new mongoose.Schema({
  bagName: {
    type: String,
  },
  quantity: {
    type: Number,
  },
 
  price: {
    type: String,
  },
  bagId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bag",
  },
});
*/}

//dmnd of cust managed by storek
{/*const demandeSchema = new mongoose.Schema({
 
  items: [demandeItemSchema],

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  id_bag:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bag'
  },
  id_customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isAccepted:{
    type:Boolean,
    default:false
  }, 
   createdAt: {
    type: Date,
    default: Date.now,
  }
});*/}

module.exports = mongoose.model('Demande', demandeSchema);
