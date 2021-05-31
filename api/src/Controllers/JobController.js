const Job = require("../Models/Job");

module.exports = {
  async CreatedJob(req, res) {

    const {
      title,
      description,
      salary, 
      company, 
      email, 
      recent,
      createdAt,
    } = req.body;

    const {user} = req.headers;

    try {

      const createdJob = await Job.create({
        user,
        title,
        description,
        salary, 
        company, 
        email, 
        recent,
        createdAt,
      });

      return res.status(200).send({message: 'Job created successfully', data: createdJob});

    } catch (err) {
      return res.status(400).send({message: err});
    }
  },

  async JobAll(req, res) {


    try {

      const JobAlls = await Job.find()

      return res.status(200).send({message: 'Job all', data: JobAlls});

      
    } catch (err) {
      return res.status(400).send({ err });
    }
  },
};
