import { Router } from "express";
import {
  createList,
  getTask,
  deleteTask,
  updateList,
} from "../controller/controller.js";

export const router = Router();

router.get("/", (req, res) => {
  res.status("200").json({ message: "Todo list backend" });
});
router.get("/test", (req, res) => {
  res.status("200").json({ message: "This is test endpoint" });
});
router.post("/add", createList);
// router.get("/list", )
router.get("/get-task/:id", getTask);
// router.get("/count", )
router.patch("/update/:id", updateList);
router.delete("/delete/:id", deleteTask);
// router.patch("/checked", )
