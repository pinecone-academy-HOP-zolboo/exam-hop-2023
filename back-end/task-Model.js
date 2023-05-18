import { model, Schema } from "mongoose";

const TaskModel = new Schema({
  title: String,
  detail: Array,
  idDone: Boolean, default: false,
  RegisterDate: { type: Date, default: Date.now }
});

export const Task = model("todo", TaskModel);