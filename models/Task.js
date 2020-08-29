// init dependencies
const mongoose = require('mongoose');

// task schema
const taskModel = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date
  },
  completedAt: {
    type: Date
  }
});

module.exports = Task = mongoose.model('Task', taskModel);