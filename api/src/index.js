const express = require("express");
const app = express();
const router = require("./Router/routes");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnection = process.env.MONGO_URI;
mongoose.connect(mongoConnection, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}, () => {console.log("Connected to database")});

app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 3333, (req, res) => {
  console.log("Server running");
});