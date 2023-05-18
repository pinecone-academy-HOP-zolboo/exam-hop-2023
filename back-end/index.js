const express = require('express')
const mongoose = require('mongoose')
const dotenv = require ('dotenv').config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000;

const todoItemRoute = require('./routers/todoItems')

mongoose.connect(process.env.DB_CONNECT)
.then (() => console.log("Database is connected"))
.catch(err => console.log(err))

app.use('/', todoItemRoute)

app.listen(PORT, () => console.log("Server connected"));