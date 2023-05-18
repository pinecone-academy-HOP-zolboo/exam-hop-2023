import mongoose, {model, Schema} from "mongoose"

const TaskSchema = new Schema({
    List: String,
    isDone: Boolean,
    createdDate: Date,
})

export const Task = model("Task", TaskSchema)