const NavbarLogo = require('../models/HomePage/Navbar/NavbarLogo')
const toDelete = require('../middleware/toDelete')
const chalk = require('chalk')

exports.NavbarLogo = async (req, res) => {
    if (req.file) {
        const navbarLogo = new NavbarLogo({
            image: req.file.filename
        })
        await navbarLogo.save()
        const Logos = await NavbarLogo.find()
        if (Logos.length > 1) {
            const deleteImg = await NavbarLogo
                .find({})
                .sort({
                    _id: 1
                })
                .limit(1)
            const { image } = await NavbarLogo.findById(deleteImg)
            toDelete(image)
            NavbarLogo.findByIdAndDelete(deleteImg, async (err, data) => {
                if (err) {
                    const Logo = await NavbarLogo.find()
                    res.status(403).json({ message: "Error", data: Logo })
                } else {
                    console.log("Delete image");
                }
            })
        }
        const Logo = await NavbarLogo.find()
        res.status(201).json({ message: "Logo saved successfully", data: Logo })
    } else {
        const Logo = await NavbarLogo.find()
        res.status(404).json({ message: "Logo Upload Required!!!", data: Logo })
    }
}


exports.NavbarLogoEdit = async (req, res) => {
    const Id = req.params.id
    const { image } = await NavbarLogo.findById(Id)
    const FindLogo = await NavbarLogo.findById(Id)
    toDelete(image)
    await NavbarLogo.findByIdAndDelete(FindLogo)
    const UpdateImage = req.file.filename
    await NavbarLogo.findByIdAndUpdate(req.params.id, UpdateImage)
}