// 









const Order = require('../Models/Orders');

// ... (your existing code)

// Controller function to get all orders with product details
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('productIdList'); // Populate product details
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get orders based on date interval and price range
const getFilteredOrders = async (req, res) => {
  try {
    const { startDate, endDate, minPrice, maxPrice } = req.query;

    // Construct filter criteria based on query parameters
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

    // Fetch orders based on filter criteria
    const filteredOrders = await Order.find(filterCriteria).populate('productIdList'); // Populate product details

    res.json(filteredOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Controller function to get a single order by ID with product details
const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate('productIdList'); // Populate product details
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    req.order = order;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new order
const createOrder = async (req, res) => {
  const { customerName, productIdList, totalAmount } = req.body;

  try {
    // Implement any specific rules or validations here if needed
    // For example, checking if all product IDs are valid before creating the order

    const newOrder = new Order({ customerName, productIdList, totalAmount});
    const savedOrder = await newOrder.save();
    
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to update an order by ID
const updateOrderById = async (req, res) => {
  const { customerName, productIdList } = req.body;

  try {
    // Implement any specific rules or validations here if needed
    // For example, checking if all product IDs are valid before updating the order

    req.order.customerName = customerName;
    req.order.productIdList = productIdList;

    const updatedOrder = await req.order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete an order by ID
const deleteOrderById = async (req, res) => {
  try {
    // Implement any specific rules or validations here if needed

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
