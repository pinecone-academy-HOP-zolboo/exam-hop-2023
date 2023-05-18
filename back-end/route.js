const express = require("express")
const router = express.Router();
const { text1 , test ,list ,count, createTodo ,deleteTodo ,checked ,update} = require('./controller')

router
    .get('/' , text1)
    .get('/test' , test)
    .get('/list', list)
    .get('/count', count)
    .post('/add', createTodo)
    .delete(`/delete/:id`, deleteTodo)
    .patch(`/checked/:id` , checked)
    .patch(`/update/:id` , update)
module.exports = router