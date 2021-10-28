const Order =require( '../models/orderModel')

const addOrderItems = (async (req, res) => {
  const {
    numItems,
    isAccepted
  } = req.body
  if (numItems && numItems.length === 0) {
    res.status(400)
    throw new Error('No order found')
    
  } else {
    const order = new Order({
        numItems,
      isAccepted
    })
    const createdOrder = await order.save()
    res.status(201).send(createdOrder)
  }
})


const getOrderById = (async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user','name email')

  if (order) {
    res.send(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

//a verifier
const getMyOrders = (async (req, res) => {
  const orders = await Order.find({})
  res.send(orders)
})


const getOrders = (async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')
  res.send(orders)
})
//edit order
//middelware
/*const UpdateOrderToDelivered = (async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.send(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})*/

module.exports= {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
}