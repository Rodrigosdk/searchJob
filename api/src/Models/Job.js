const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  salary:{
    type: String,
  },
  company:{
    type: String,
  },
  email:{
    type: String,
    required: true,
  },
  recent:{
    type: Number,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Job', Schema);