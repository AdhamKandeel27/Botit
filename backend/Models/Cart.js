const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({

    productIdList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
    ],




    


});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;