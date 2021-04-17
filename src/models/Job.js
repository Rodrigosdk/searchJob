const mongoose = require('mongoose');

const JobSchema = new Schema({
  title:{
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
    type: 'Integer',
  },
  createdAt:{
    type: 'Date',
    default: Date.now,
  }
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;