const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const JobsController = require('../controllers/JobsController');

router.get('/states', UserController.getStates);

router.post('/user/signin', AuthController.signin);
router.post('/user/signup', AuthController.signup);

router.get('/user/me', UserController.info);
router.put('/user/me', UserController.editAction);

router.post('/ad/job', JobsController.addAction);
router.get('/ad/list', JobsController.getList);
router.get('/ad/job', JobsController.getJob);
router.put('/ad/:id', JobsController.editAction);

router.get("/ping", (req, res) => {
  return res.json({pong: true});
}); 

module.exports = router;