const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
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
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Boolean,
    default: true,
    required: true,
  },
  imageUrl: {
    type: String,
    default: 'https://baconmockup.com/640/360/',
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const Products = mongoose.model('product', Product);

module.exports = Products;
