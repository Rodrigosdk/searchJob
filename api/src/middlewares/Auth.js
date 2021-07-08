const User = require('../models/User');

module.exports = {
  private: async (req, res, next) => {

    //Se não recebeu dados no query, body => Não permitir acesso
    if(!req.query.token && req.body.token){
      res.json({notallowed: true});
      return;
    }

    //Se recebeu dados no query, body => acesso permitido
    let token = '';
    if(req.query.token){
      token = req.query.token;
    }
    if(req.body.token){
      token - req.body.token;
    }

    //Se recebeu dados vazio => Não permitir acesso
    if(token == ''){
      res.json({notallowed: true});
      return;
    }

    //Se não achou usuário => Não permitir acesso
    const user = await User.findOne({token});
    if(!user){
      res.json({notallowed: true});
      return;
    }

    next();
  }
}