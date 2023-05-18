const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
  text: String,
  detail: Array,
  isDone: Boolean,
  createdDate: Date,
});

const TaskModel = model("list", TaskSchema);

module.exports = TaskModel;

