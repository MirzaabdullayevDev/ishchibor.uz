const { Router } = require('express')
const router = Router()
const fileUpload = require('../../middleware/fileUpload')
const { NavbarLogo, NavbarLogoEdit } = require('../../controllers/Navbar')

router.route('/logo').post(fileUpload.single("image"), NavbarLogo)
router.route('/logo/edit/:id').post(fileUpload.single("image"), NavbarLogoEdit)

module.exports = router