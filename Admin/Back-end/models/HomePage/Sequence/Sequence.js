const { Schema, model } = require('mongoose')


const Sequence = Schema({
    number: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
})

module.exports = model('Sequence', Sequence)