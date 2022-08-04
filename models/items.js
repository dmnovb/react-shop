const mongoose = require('mongoose') 

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: false
    },
    
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('item', itemSchema)