const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');
const LoginController = require('../Controllers/LoginController');
const JobController = require('../Controllers/JobController');

router.post("/users", UserController.CreateUser);
router.get("/users", UserController.UserAll);

router.post("/login", LoginController.Login);

router.post("/jobs", JobController.CreatedJob);
router.get("/jobs", JobController.JobAll)

router.get("/", (req, res) => {
  return res.send("Hello")
});

module.exports = router;