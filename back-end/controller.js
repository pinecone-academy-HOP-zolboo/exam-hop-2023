const Todo = require('./model')
// exports.createEssay = async (req ,res ) => {
//     if(
//         !req.body?.essayName ||
//         !req.body?.essay
//     ) {
//         res 
//             .status(400)
//             .json({message : "essay or essay are required"})
//     }
//     const createEssay = await Essay.create({...req.body})
//     res 
//         .status(200)
//         .json({message: "new essay included" , data: createEssay})
// }
exports.text1 = async (req, res) => {
    res.send({ message: "Todo list backend" })
}

exports.test = async (req, res) => {
    res.send({ message: "This is test endpoint" })
}
exports.list = async (req, res) => {
    const Todos = await Todo.find();
    res.send({ data: Todos })
}
exports.count = async (req, res) => {  //x
    res.send({ message: "Todo list backend" })
}
exports.createTodo = async (req, res) => {
    console.log(req.body)
    if (
        !req.body
    ) {
        res
            .status(400)
            .json({ message: "write something bro" })
    }
    const createTodo = await Todo.create({ ...req.body })
    res
        .status(200)
        .json({ data: createTodo })
}
exports.deleteTodo = async (req, res) => { 
    const { id } = req.params;
    // consoe.log(id)
    try {
        await Todo.findByIdAndDelete(id);
        res 
            .status(200)
            .json({message:" message deleted"})
    } catch (err) {
        res.status(400).json(err);
    }
}
exports.checked = async (req, res) => {
    const { id } = req.params;
    try {
        if(req.body.isDone == true) {
            
            await Todo.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"checked updated"})
        } else {
            await Todo.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"checked updated"})
        }
      
    } catch (err) {
        res.status(400).json(err);
    }
}
exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndUpdate(id, req.body);
        res.status(200).json({message:"updated"})
    } catch (err) {
        res.status(400).json(err);
    }

}