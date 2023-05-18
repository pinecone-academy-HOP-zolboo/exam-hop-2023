const express = require("express")
const port = 5000 
const app = express()
const mongoose = require("mongoose")
const route  = require("./route.js");
var cors = require("cors");


const URI = "mongodb+srv://NominErdene:99305757@cluster0.rz1blnn.mongodb.net/list?retryWrites=true&w=majority";

mongoose.connect(URI).then(() => {console.log("Successfully connected mongodb")}).catch((err) => {console.log(err)})


app.use(cors())
app.use(express.json())
app.use(route)
app.listen(port , () => {console.log("Todo list backend")})
