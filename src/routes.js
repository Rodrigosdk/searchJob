const express = require('express');
const DashboardController = require('./controllers/DashbordController');
const CreatedController = require('./controllers/CreatedController');
const routes = express.Router();

routes.get("/", DashboardController.index);
routes.post("/add", CreatedController.created);

module.exports = routes;