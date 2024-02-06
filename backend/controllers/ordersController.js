
const Order = require('../Models/Orders');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('productIdList'); 
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFilteredOrders = async (req, res) => {
  try {
    const { startDate, endDate, minPrice, maxPrice } = req.query;

    const filterCriteria = {};
    if (startDate || endDate) {
      filterCriteria.date = {};
      if (startDate) filterCriteria.date.$gte = new Date(startDate);
      if (endDate) filterCriteria.date.$lte = new Date(endDate);
    }
    if (minPrice || maxPrice) {
      filterCriteria.totalAmount = {};
      if (minPrice) filterCriteria.totalAmount.$gte = parseFloat(minPrice);
      if (maxPrice) filterCriteria.totalAmount.$lte = parseFloat(maxPrice);
    }

      const filteredOrders = await Order.find(filterCriteria).populate('productIdList'); 
      
    res.json(filteredOrders);
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

const createOrder = async (req, res) => {
  const { customerName, productIdList, totalAmount } = req.body;

  try {
    const newOrder = new Order({ customerName, productIdList, totalAmount});
    const savedOrder = await newOrder.save();
    
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


module.exports = {
  getAllOrders,
  getFilteredOrders,
  getOrderById,
  createOrder,
  updateOrderById,
};
