const mongoose = require ('mongoose')

const TodoItemSchema = new mongoose.Schema({
    item:{
        text:String,
        IsDone:{
        type: Boolean,
        default: false,
    },
    createdDate:Date,
    }
})

module.exports = mongoose.model('todo', TodoItemSchema)