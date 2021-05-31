const User = require('../Models/User');

module.exports = {
  async CreateUser(req, res) {

    const {name, email, password} = req.body;

    try {

      const userAlreadyExists = await User.findOne({
        email
      });

      if(userAlreadyExists) return res.status(400).send({message: 'User already exists. Try another one'});

      const createdUser = await User.create({
        name, email, password
      });

      return res.status(200).send({message: 'User created successfully', data: createdUser});
      
    } catch (err) {
      return console.log(err);
    }

  },

  async UserAll(req, res) {

    try {

      const userAll = await User.find();

      return res.status(200).send({message: 'All users', userAll});
      
    } catch (err) {
      return res.status(400).send(err)
    }

  }
}