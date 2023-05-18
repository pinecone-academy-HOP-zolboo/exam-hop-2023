const express = require("express");
const router = express.Router();
const { getCount, getList, Add, Delete, Checked, Update, getTest} = require("../back-end/list-controller");
// const { check } = require("app");


router
  .get('/list', getList)
  .get('/test', getTest)
  .get("/count", getCount)
  .post("/add", Add)
  .delete("/delete", Delete)
  .patch("/checked", Checked)
  .patch("/Updated", Update)


module.exports = router;