const { Schema, model } = require('mongoose')

const NavbarLogo = Schema({
    image: {
        type: String,
        required: true
    }
})


module.exports = model("NavbarLogo", NavbarLogo)