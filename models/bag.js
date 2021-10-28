const mongoose=require('mongoose')

//review
const reviewsSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User',
      },
    },
    {
      timestamps: true,
    }
  )
  //bagschema
const bagSchema= new mongoose.Schema({
  id_customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  id_storekeeper: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user",
  },
  id_bag:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"bag",

  },
    namebag:{
        type:String,
    },
    image:{
      type: Array,
      default: []
        },
    description:{
        type:String,
    },
    adresse:{
      type:String,
    },
    numProduct:{
        type:Number,
        default:0
    },
    category:{
        type:String,
    },
    price:{
        type:Number,
    },
    priceBefore:{
      type:Number
    },
    expirationDate:{
        type:Date,

    },
    availibiltyDate:{
        type:Date,
    },
   
    reviews: [reviewsSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    isReserved:{
      type: Boolean,
      default:"false"
    },
    likes: [
      {
          user: {
              type: mongoose.Schema.Types.ObjectId,
              reference: "User",
          },
      },
  ],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    createDate:{
        type:String,
        default:Date.now()
    }


})
{ /* image:{
  type: Array,
  default: []
    },*/}
module.exports=Bag=mongoose.model("bag",bagSchema)