import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { taskRouter } from "./router.js";
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(taskRouter);

mongoose.set("strictQuery", true);

app.listen(PORT, () => {
  console.log("app listening on " + "http://localhost:5000");
});
const CONNECTION_STRING =
  "mongodb+srv://Admin:Pass1234@cluster0.rzshlkq.mongodb.net/";

mongoose
  .connect(CONNECTION_STRING)
  .then(() => {
    console.log("amjilttai holbogdloo");
  })
  .catch((error) => console.log(error));
