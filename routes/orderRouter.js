const express =require('express')
const orderrouter = express.Router()
const ord =require( '../controllers/bagorder')
const Order =require( '../models/orderModel')
const {isAuth} =require('../middleware/authValidator')
const {isStorek} =require('../middleware/isStorek')
const {isCust} =require('../middleware/isCust')

//post order
orderrouter.post('/',ord.addOrderItems)
//get custorder
orderrouter.get('/',ord.getOrders)
//get my orders
orderrouter.get('/myorders',ord.getMyOrders)
//get one order
orderrouter.get('/:id',ord.getOrderById)
//get accepted custOrder 
orderrouter.get('/acceptedbag',async(req,res)=>{
    try {
      const orders = await Order.find({
        $and: [{ id_cust: req.user._id }, { isAccepted: true }],
      });
      res.status(200).send({ msg: "accepted order", orders });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ errors: [{ msg: "cannot get this order", error }] });
    }
  })
//isAccepted order
orderrouter.patch('/:id/isaccepted',async (req, res) => {
  const { id } = req.params
  const order = await Order.findById(id)
//the value of isAccepted become true if it was false
  const acceptedOrder = await Order.findByIdAndUpdate(id, { isAccepted: !order.isAccepted },
     { new: true });
  
  res.send(acceptedOrder)
})


//edit order

module.exports=orderrouter