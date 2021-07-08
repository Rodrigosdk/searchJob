const mongoose = require('mongoose');
const {validationResult, matchedData} = require('express-validator');

const bcrypt = require('bcrypt');

const User = require('../models/User');
const State = require('../models/State');


module.exports = {
  signin: async (req, res) => {

  },
  
  signup: async (req, res) => {
    // Verificando se os campos estão vazios
    const erros = validationResult(req);
    if(!erros.isEmpty()){
      res.json({error: erros.mapped()});
      return;
    }
    const data = matchedData(req);


    // Verificando se o email já existe
    const user = await User.findOne({
      email: data.email
    });
    if(user){
      res.json({
        error: {email: {msg: 'Email já existe'}}
      });
      return;
    }


    // Verificando se Estado existe 
    if(mongoose.Types.ObjectId.isValid(data.state)){
      const stateItem = await State.findById(data.state);
      if(!stateItem){
        res.json({
          error: {state: {msg: 'Estado não existe'}}
        });
        return; 
      }
    } else {
      res.json({
        error: {state: {msg: 'Código de estado inválido'}}
      });
      return; 
    }

    // Bcryp do password
    const passwordHash = await bcrypt.hash(data.password, 10);

    // Hora atual, número aleatório em String => Token
    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hash(payload, 10);

    // Cadastrando usuário
    const newUser = new User({
      name: data.name,
      email: data.email,
      passwordHash,
      token,
      state: data.state
    });

    await newUser.save();

    // Token de resposta  
    res.json({token});
  }
};