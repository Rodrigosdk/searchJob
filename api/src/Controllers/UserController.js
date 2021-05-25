const User = require('../Models/User');

module.exports = {
  async CreateUser(req, res) {

    const {name, email, password} = req.body;

    try {

      const createdUser = await User.create({
        name, email, password
      });

      return res.status(200).send({message: 'User created successfully', createdUser});
      
    } catch (err) {
      return res.status(400).send(err)
    }

  }
}