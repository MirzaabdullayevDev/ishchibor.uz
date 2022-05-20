const { Schema, model } = require("mongoose");

const NavbarMenu = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = model("NavbarMenu", NavbarMenu);
