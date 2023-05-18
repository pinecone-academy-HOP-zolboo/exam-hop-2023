const express = require("express");
const router = express.Router();
const port = 5000;
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')

const connect = require("./db");
connect();



const {
    test, endPoint, createTask, getLists, deleteList, updateList, checkList, getList
  
} = require("./controller");

router
    .get("/", test)
    .get("/test", endPoint)
    .get("/list", getLists)
    .post("/add", createTask)
    .delete("/delete/:id", deleteList)
    .patch("/update/:id", updateList)
    .patch("/checked/:id", checkList)
    .get("/list/:id", getList)




app.use(bodyParser.json());
app.use(cors())
app.use(router);
app.listen(port, () => {
    `working${port}`;
  });