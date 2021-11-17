const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        orderItems:[
            {
                name: {type: String, required: true},
                quntity: {type: Number, require: true},
                image: { type: String, require: true},
                address: {type: String, required: true},
                bag: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Bag',
                    required: true,
                },
            },
        ],
        shippingAddress: {
            fullName: {type: String, required:true },
            address: {type: String, required:true },
            city: {type: String, required:true },
            pinCode: {type: Number, required:true },
            country: {type: String, required:true },
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
            required: true,
        },
        seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
        isRequested: {type: Boolean, default: false,},
        isDelivered: {type: Boolean, default: false,},
        deliveredAt: {type: Date},
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Order', orderSchema);

