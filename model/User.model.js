const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const User = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  ban: {
    type: Boolean,
    required: true,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['customer', 'staff', 'admin'],
    default: 'customer',
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
    default: moment().unix(),
  },
});

const Users = mongoose.model('user', User);

module.exports = Users;
