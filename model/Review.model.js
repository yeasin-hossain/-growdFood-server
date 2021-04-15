const mongoose = require('mongoose');
const moment = require('moment');

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
    type: Number,
    required: true,
    default: moment().unix(),
  },
});

const Reviews = mongoose.model('Review', Review);

module.exports = Reviews;
