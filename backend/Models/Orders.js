const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

  customerName: {
    type: String,
    required: true,
  },

  productIdList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  ],

  totalAmount: {
    type: Number,
    required: true,
  },
  
  date: {
    type: Date,
    default: Date.now,
  },

  
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;