const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  idUser:{
    type: String,
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
    type: Number,
  },
  salaryNegociable:{
    type: Boolean,
  },
  state:{
    type: String,
    required: true,
  },
  company:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  dataCreated:{
    type: Date,
  },
  views:{
    type: Number,
  },
  status:{
    type: String,
  }
});

const modelName = 'Job'

if(mongoose.connection && mongoose.connection.models[modelName]){
  module.exports = mongoose.connection.models[modelName];
} else {
  module.exports = mongoose.model(modelName, modelSchema);
}