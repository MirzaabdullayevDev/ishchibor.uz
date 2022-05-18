const { Schema, model } = require('mongoose')

const Categories = Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },


})

module.exports = model('Categry', Categories)