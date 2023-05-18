import { Router } from "express";
import { CreateList, DeleteList, checkList, getCount, getEndpoint, getList, getMessage, putList } from "./controller.js";

export const listRouter = Router();

listRouter
  .get("/", getMessage)
  .get("/test", getEndpoint)
  .get("/count", getCount)
  .get("/list", getList)
  .patch("/update/:id", putList)
  .patch("/checked/:id", checkList)
  .post("/post", CreateList)
  .delete("/delete/:id", DeleteList);
