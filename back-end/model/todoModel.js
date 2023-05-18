import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  title: String,
  detail: Array,
  isDone: Boolean,
});

export const todoModel = model("list", todoSchema);