const Job = require('../models/Job');

exports.index = (req, res) => {
  try {

    Job.find().then((jobs) => {
      return res.json({jobs});
    });

  } catch (error) {

    return res.status(400).send({error});

  }
}