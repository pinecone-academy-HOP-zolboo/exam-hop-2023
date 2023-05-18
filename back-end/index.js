const express = require("express");
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("app listening port: http://localhost:" + process.env.PORT);
});
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Successfully connected mongoDB");
  })
  .catch((error) => console.log(error));