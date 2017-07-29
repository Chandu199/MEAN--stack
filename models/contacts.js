const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    require: true
  },
  phone_number: {
    type: String,
    require: true
  }
});

const Contact = module.exports = mongoose.model('contact', ContactSchema);
