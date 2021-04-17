const mongoose = require('mongoose');

const { Schema } = mongoose;

const newsletter = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const Newsletter = mongoose.model('newsletter', newsletter);

module.exports = Newsletter;
