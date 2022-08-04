const express = require('express');
const router = express.Router()
const item = require('../models/items')

router.get('/', async (req, res) => {
    try {
        const items = await item.find()
        let objects = {
            items: items
        } 
        res.send(objects);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/', async(req,res) => {
    const inventory = new item({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
    })

    try {
        const newItem = await inventory.save()
        res.status(200).json(newItem)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

router.delete('/:id', async(req, res) => {
    let thisItem = await item.findById(req.params.id)
    thisItem.delete()
    res.send("item deleted")
})



module.exports = router