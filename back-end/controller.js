import { Task } from "./model.js";

export const getMessage = async (req, res) => {
        res
        .status(200)
        .json({message: "Todo list backend"})
}

export const getEndpoint = async (req, res) => {
    res
    .status(200)
    .json({message: "This is test endpoint"})
}

export const getList = async (req, res) => {
    try {
        const Lists = await Task.find({})
        res
        .status(200)
        .json({message: "ok", data: Lists})
    } catch (error) {
        return res
        .status(400)
        .json({message:"failed"})
    }
}

export const getCount = async (req, res) => {
    const {isDone} = req.body; 
    let count = 0
    try {
        const Lists = await Task.find({})
        Lists.map((cur) => {if(isDone === true ){count = count + 1}}) 
        res
        .status(200)
        .json({"Tasks i did": count})
    } catch (error) {
        return res
        .status(400)
        .json({message:"failed to count"})
    }
}

export const CreateList = async (req, res) => {
    const { List } = req.body;
    try {
        const Lists = await Task.create({List: List})
        res
        .status(200)
        .json({message: "ok", data: Lists})
    } catch (error) {
        return res
        .status(400)
        .json({message:"failed to create", data: null})
    }
}

export const putList = async (req, res) => {
    const { id } = req.params;
    try {
        const Lists = await Task.findByIdAndUpdate(id, {...req.body})
        res
        .status(200)
        .json({message: "ok", data: Lists})
    } catch (error) {
        return res
        .status(400)
        .json({message:"failed to update", data: null})
    }
}

export const checkList = async (req, res) => {
    const { id } = req.params;
    const { isDone } = req.body;
    try {
        const Lists = await Task.findByIdAndUpdate(id, {isDone: isDone})
        res
        .status(200)
        .json({message: "ok", data: Lists})
    } catch (error) {
        return res
        .status(400)
        .json({message:"failed to update", data: null})
    }
}

export const DeleteList = async (req, res) => {
    const { id } = req.params;
    try {
        const Lists = await Task.findByIdAndDelete(id, {...req.body})
        res
        .status(200)
        .json({message: "User deleted", data: Lists})
    } catch (error) {
        return res
        .status(400)
        .json({message:"failed to delete", data: null})
    }
}