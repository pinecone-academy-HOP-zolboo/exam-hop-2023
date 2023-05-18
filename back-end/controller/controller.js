import taskModel from "../model/taskModel.js";

export const getList = async (req, res) => {
  res.status(200).json({ message: "Todo list backend" });
};

export const createList = async (req, res) => {
  const list = await taskModel.create(req.body);
  res.status(200).json(list);
};

export const updateList = async (req, res) => {
  const { _id } = req.params;
  const list = await taskModel.findByIdAndUpdate(_id, { ...req.body });

  res.send(list + "has sucessfully updated");
};
export const getTask = async (req, res) => {
  const id = req.body;
  const list = await taskModel.find(id);
  res.send(list);
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await taskModel.findByIdAndDelete(id);
  res.status(200).json({ message: "task deleted" });
};
// export const checked = async (req, res) => {
//   const isDone = req.body;
//   const change = await isDone.up
// }
