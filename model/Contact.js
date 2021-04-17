const mongoose = require('mongoose');

const { Schema } = mongoose;

const contact = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const Contact = mongoose.model('contact', contact);

module.exports = Contact;
