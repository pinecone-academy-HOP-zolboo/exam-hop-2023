const TaskModel = require("./model")

exports.test = async (req, res) => {
    res.send("Todo list backend")
}

exports.endPoint = async (req, res) => {
    res.send("This is test endpoint")
}

exports.createTask = async (req, res) => {
    try {
        const task = await TaskModel.create(req.body)
        res.json({message: "Task added", data: task})
    } catch (error) {
        res.json(null)
    }
}

exports.getLists = async (req, res) => {
    try {
        const list = await TaskModel.find()
        res.json(list)
    } catch (error) {
        res.json(null)
    }
}

exports.deleteList = async (req, res) => {
    const {id} = req.params
    try {
        const list = await TaskModel.findByIdAndDelete(id)
        res.json({message: "deleted", data: list})
    } catch (error) {
        res.json(null)
    }
}

exports.updateList = async (req, res) => {
    const {id} = req.params
    const {text} = req.body 
    try {
        const list = await TaskModel.findByIdAndUpdate(id, {text})
        console.log(list)
        res.json({message: "updated", data: list})
    } catch (error) {
        res.json(null)
    }
}

exports.checkList = async (req, res) => {
    const {id} = req.params
    const {isDone} = req.body 
    try {
        const list = await TaskModel.findByIdAndUpdate(id, {isDone})
        res.json({message: "updated", data: list})
    } catch (error) {
        res.json(null)
    }
}

exports.getList = async (req, res) => {
    const {id} = req.params
    try {
        const list = await TaskModel.findById(id)
        res.json(list)
    } catch (error) {
        res.json(null)
    }
}