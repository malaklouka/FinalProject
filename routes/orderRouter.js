{/*const express=require('express')
const orderRouter = express.Router();

const Order = require('../models/orderModel');
const {isCust}=require('../middleware/isCust')
const isAuth=require('../middleware/passport')
const {isStorek}=require('../middleware/isStorek')
const {isAdmin}= require('../middleware/admin')

orderRouter.get('/mine',isAuth,async (req,res) => {
    const order =await  Order.find({user: req.user._id});
    res.send(order);
})
orderRouter.post('/',isAuth(),async (req, res) => {
    if(req.body.orderItems.length === 0){
        res.status(400).send({message: 'Cart is empty'});
    }else{
        const order = new Order({
            seller: req.body.orderItems[0].seller,
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            user: req.user._id,
        });
        const createdOrder = await order.save();
        res.status(201).send({message: 'New Order Created', order: createdOrder});
    }
}
);

orderRouter.get('/',isAuth(), isStorek ,async (req, res) => {
    // const orders = await Order.find({}).populate('user', 'name');
    const seller = req.query.seller || '';
    const sellerFilter = seller ? { seller } : {};

    const orders = await Order.find({ ...sellerFilter }).populate('user','name');
    res.send(orders);
    })


orderRouter.get('/:id', isAuth(),async (req, res) =>{
    const order = await Order.findById(req.params.id);
    if(order){
        res.send(order);
    }else{
        res.status(404).send({message: 'Order Not Found'});
    }
});

orderRouter.put('/:id/requested',isAuth(),async(req, res) => {
    const order = await Order.findById(req.params.id);
    if(order){
        order.isRequested = true;
        const updatedOrder = await order.save();
        res.send({message: 'Requested', order: updatedOrder});
    }else{
        res.status(404).send({message: 'Request Not Found'});
    }
    
});

orderRouter.delete('/:id',isAuth(),isAdmin,async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
        const deleteOrder = await order.remove();
        res.send({ message: 'Order Deleted', order: deleteOrder });
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
  } catch (error) {
    res.status(400).send(error)
  }
   
    })
orderRouter.put('/:id/deliver',isAuth(), isAdmin,async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updatedOrder = await order.save();
        res.send({ message: 'Order Delivered', order: updatedOrder });
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
    })

    module.exports=orderRouter


  */}