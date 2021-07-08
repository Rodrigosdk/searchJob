const express = require('express');
const router = express.Router();

//Meddlewars
const Auth = require('../middlewares/Auth');

//Validators
const AutoValidator = require('../validators/AuthValidator');

const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const JobsController = require('../controllers/JobsController');

router.get('/states', UserController.getStates);

router.post('/user/signin', AuthController.signin);
router.post('/user/signup', AutoValidator.signup, AuthController.signup);

router.get('/user/me', Auth.private, UserController.info);
router.put('/user/me', Auth.private, UserController.editAction);

router.post('/ad/job', Auth.private, JobsController.addAction);
router.get('/ad/list', JobsController.getList);
router.get('/ad/job', JobsController.getJob);
router.put('/ad/:id', Auth.private, JobsController.editAction);

router.get("/ping", (req, res) => {
  return res.json({pong: true});
}); 

module.exports = router;