// init dependencies
const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
  }
});

module.exports = User = mongoose.model('user', userSchema);