const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const Order = new Schema({
  userEmail: {
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
  status: {
    type: String,
    enum: ['pending', 'cancel', 'accepted', 'delivered'],
    default: 'pending',
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
    default: moment().unix(),
  },
});

const Orders = mongoose.model('order', Order);

module.exports = Orders;