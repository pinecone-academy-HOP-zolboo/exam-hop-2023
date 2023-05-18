import { Task } from "./task-Model.js";

export const getTask = async (req, res) => {
  const data = await Task.find({});
  res.send(data);
};
export const createTask = async (req, res) => {
  const data = await Task.create(req.body);
  res.send("created");
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Task.findByIdAndDelete({ _id: id });
  } catch (error) {
    return res.status(400).json({ message: error.message, data: null });
  }
};

export const test = async (req, res) => {
  res.send("this is not endpoint");
};

