const User = require('../Models/User');

module.exports = {
  async Login(req, res) {

    const {email, password} = req.body;

    try {

      const validUser = await User.findOne({
        email
      });

      if(!validUser) return res.status(400).send({message: 'User not exists'});


      const validPassword = await User.findOne({
        password
      }).where({
        email
      })

      if(!validPassword) return res.status(400).send({message: 'User invalid'});


      return res.status(200).send({
        message: 'Success',
        data: validPassword
      });
      
    } catch (err) {
      return res.status(400).send({err})
    }

  }
}