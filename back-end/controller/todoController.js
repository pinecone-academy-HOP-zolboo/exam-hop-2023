import { todoModel } from "./../model/todoModel";

export const todolistbackend = (req,res) =>{
    res.send({ message: "Todo list backend" });
}    
export const test = (req,res) =>{
    res.send({ message: "This is test endpoint" });
}    
export const getList = async (_req, res) => {
  const data = await todoModel.find({});
  res.send(data);
};
export const add = async (req, res) => {
  await todoModel.create(req.body);
  res.send({ message: "Successfully added" });
};
export const getMylist = async (req, res) => {
  const data = await todoModel.find();
  res.send(data);
};