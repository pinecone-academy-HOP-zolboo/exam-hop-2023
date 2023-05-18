import express from 'express'
import { Router } from "express";
import { listRouter } from './router.js';
import mongoose from 'mongoose';
import  cors  from 'cors';
import bodyParser from 'body-parser';



const CONNECTION_STRING =
    "mongodb+srv://badrakh:badrakh20081211@cluster0.nk0hxud.mongodb.net/hop2-exam?retryWrites=true&w=majority";

mongoose
    .connect(CONNECTION_STRING)
    .then(() => {
        console.log("Successfully connected mongodb")
    })
    .catch((error) => console.log(error))

const PORT = 5001;
const app = express()

app.use(cors())
app.use(express.json())
app.use(listRouter)

app.listen(PORT, () => {
    console.log("server starting at " + PORT)
})
