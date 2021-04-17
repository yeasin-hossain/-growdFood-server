const mongoose = require('mongoose');

const { Schema } = mongoose;

const Review = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const Reviews = mongoose.model('Review', Review);

module.exports = Reviews;
