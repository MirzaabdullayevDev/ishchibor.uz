const { Router } = require('express')
const router = Router()
const fileUpload = require('../../middleware/fileUpload')
const { NavbarLogo } = require('../../controllers/Navbar')


router.route('/logo', fileUpload.single("image")).post(NavbarLogo)


module.exports = router