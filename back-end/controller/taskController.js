import { taskModel } from "../model/taskMdel.js";

export const getTasks = async (_req, res) => {
  const tasks = await taskModel.find();
  res.status(200).json({ data: tasks });
};

export const addTasks = async (req, res) => {
  const task = await taskModel.create(req.body);
  console.log(req.body)
  res.status(200).json({ message: true, data: task });
};
export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await taskModel.findByIdAndDelete(id);
    res.status(200).json({ message: `Task is deleted` });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: true, data: null });
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  console.log(req.body)
  try {
    const task = await taskModel.findByIdAndUpdate(id, {...req.body});
    res.status(200).json({ message: "Task is updated"  , data : task});
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};
