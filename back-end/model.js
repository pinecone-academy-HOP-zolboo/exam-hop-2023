const { model, Schema } = require("mongoose");

const TaskScheme = new Schema({
    text: String,
    isDone : {type: Boolean, default: false},
    createdData: Date

});
const TaskModel = model("Task", TaskScheme);
module.exports = TaskModel;