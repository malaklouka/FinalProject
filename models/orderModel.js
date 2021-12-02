const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User,
      },
      orderItems: [
        {
          name: { type: String, required: true },
          qty: { type: Number, required: true },
          image: { type: String,},
          price: { type: Number, required: true },
          bag: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Bag',
          },
        },
      ],
      shippingAddress: {
        address: { type: String,},
        city: { type: String, },
        postalCode: { type: String, },
        country: { type: String,  },
      },
      paymentMethod: {
        type: String,
      },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
      },
      taxPrice: {
        type: Number,
        default: 0.0,
      },
      shippingPrice: {
        type: Number,
        default: 0.0,
      },
      totalPrice: {
        type: Number,
        default: 0.0,
      },
      isPaid: {
        type: Boolean,
        default: false,
      },
      paidAt: {
        type: Date,
      },
      isDelivered: {
        type: Boolean,
        default: false,
      },
      deliveredAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );
module.exports = mongoose.model('Order', orderSchema);

