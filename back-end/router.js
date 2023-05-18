import { Router } from "express";
const router = Router();

import { getTasks, addTasks, deleteTasks, updateTask } from "./controller/taskController.js";

router.get("/", (req, res) => {
  res.status("200").json({ message: "working" });
  res
    .status("404")
    .json({ message: "not working, check your internet connection" });
});
router.get("/list", getTasks);
router.post("/add", addTasks);
router.delete("/delete/:id" , deleteTasks);
router.patch("/update/:id" , updateTask)

export {router}