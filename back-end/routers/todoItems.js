const router = require('express').Router();

const todoItemsModel = require ('../models/todoItems');

router.post('/', async (req, res) =>{
    try{
        const newItem = new todoItemsModel({
            item:req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json('Item created successfully')
    }catch(err){
        res.json(err);
    }
})

module.exports = router;