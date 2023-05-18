const { model, Schema } = require('mongoose');

const TodoSchema = new Schema({
    Todotext: String,
    isDone: Boolean,
    createdDate: Date
})

const TodoModel = model('todo', TodoSchema);

module.exports = TodoModel