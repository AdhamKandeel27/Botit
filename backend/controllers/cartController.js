
const Cart = require('../Models/Cart');

const getAllCartItems = async (req, res) => {
  try {
    const items = await Cart.find().populate('productIdList'); 
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate('productIdList'); 
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    req.order = order;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToCart = async (req, res) => {
  const  productIdList  = req.body;

  try {
    const newOrder = new Order({ customerName, productIdList, totalAmount});
    const savedOrder = await newOrder.save();
    ca
    
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateOrderById = async (req, res) => {
  const { customerName, productIdList } = req.body;

  try {
    req.order.customerName = customerName;
    req.order.productIdList = productIdList;

    const updatedOrder = await req.order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOrderById = async (req, res) => {
  try {

    await req.order.remove();
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllOrders,
  getFilteredOrders,
  getOrderById,
  createOrder,
  updateOrderById,
  deleteOrderById,
};
