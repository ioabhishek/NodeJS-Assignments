const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  isPromoted: {
    type: Boolean,
    default: null
  }
})

// Creating a new collection
const User = new mongoose.model('User', userSchema);

module.exports = User;