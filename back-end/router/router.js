import { Router } from "express";
import { createList, getTask, deleteTask } from "../controller/controller.js";

export const router = Router();

router.get("/", (req, res) => {
  res.status("200").json({ message: "Todo list backend" });
});
router.post("/", createList);
router.get("/getTask", getTask);
router.delete("/deleteTask", deleteTask);
