const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');
const LoginController = require('../Controllers/LoginController');

router.post("/users", UserController.CreateUser);
router.get("/users", UserController.UserAll);

router.post("/login", LoginController.Login);

module.exports = router;