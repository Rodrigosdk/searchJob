const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');

router.post("/users", UserController.CreateUser);

router.get("/", (req, res) => {
  return res.send("Hello");
});

module.exports = router;