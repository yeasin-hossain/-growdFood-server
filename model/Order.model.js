const mongoose = require('mongoose');

const { Schema } = mongoose;

const Order = new Schema({
  userId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  productInfo: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['lunch', 'breakfast', 'dinner', 'ifter'],
      required: true,
    },
  },
  cardId: {
    type: String,
    required: true,
  },
  cardType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'cancel', 'accepted', 'delivered'],
    default: 'pending',
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
});

const Orders = mongoose.model('order', Order);

module.exports = Orders;
