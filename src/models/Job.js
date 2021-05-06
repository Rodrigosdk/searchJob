const mongoose = require('../database/connection');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title:{
    type: 'String',
    required: true,
  },
  description:{
    type: 'String',
    required: true,
  },
  salary:{
    type: 'String',
  },
  company:{
    type: 'String',
  },
  email:{
    type: 'String',
    required: true,
  },
  new:{
    type: Number,
  },
  createdAt:{
    type: 'Date',
    default: Date.now,
  },
  updatedAt:{
    type: 'Date',
    default: Date.now,
  }
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;