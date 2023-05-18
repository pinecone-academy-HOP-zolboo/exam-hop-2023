import express from "express";
import { connect } from "./database/db.js";
import {router}  from "./router.js";
import bodyParser from "body-parser";
import cors from "cors"


const port = 5000;

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(router);

connect();

app.listen(port, () => {
  console.log(`Successfully connected mongodb`);
});
