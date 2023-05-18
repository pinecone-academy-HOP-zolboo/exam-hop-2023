import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  text: String,
  isDone: { type: Boolean, default: false },
});

const taskModel = model("data", taskSchema);

export { taskModel };
