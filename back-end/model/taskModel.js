import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  text: String,
  isDone: {
    type: Boolean,
    default: false,
  },
  createdDate: Date,
});

const taskModel = model("tasks", taskSchema);
export default taskModel;
