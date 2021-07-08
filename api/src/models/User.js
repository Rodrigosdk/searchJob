const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  state:{
    type: String,
    require: true
  },
  passwordHash:{
    type: String,
    require: true
  },
  token:{
    type: String,
    require: true
  }
});

const modelName = 'User'

if(mongoose.connection && mongoose.connection.models[modelName]){
  module.exports = mongoose.connection.models[modelName];
} else {
  module.exports = mongoose.model(modelName, modelSchema);
}