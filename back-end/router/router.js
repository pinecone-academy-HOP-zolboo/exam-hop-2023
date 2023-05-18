import { Router } from "express";
import {
  addTask,
  getList,
  getMylist,
  todolistbackend,
  test,
} from "./../controller/todoController.js";

export const todoRouter = Router();

todoRouter.get("/",test)
todoRouter.get("",todolistbackend)
todoRouter.get("/lists", getList);
todoRouter.post("/add", addTask);
todoRouter.get("/list", getMylist);