import { Router } from "express";
import {
  getTask,
  createTask,
  deleteTask,
  test,
} from "./task-Controller.js";

export const taskRouter = Router();

taskRouter.get("/list", getTask);
taskRouter.post("/add", createTask);
taskRouter.delete("/delete/:id", deleteTask);
taskRouter.get("/test", test);
