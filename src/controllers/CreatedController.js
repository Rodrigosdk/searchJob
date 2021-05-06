const Job = require('../models/Job');

exports.created = async (req, res) => {
  try {
    
    const job = await Job.create(req.body);
    return res.status(200).json({job});

  } catch (error) {
  
    return res.status(400).send({error});

  }
}