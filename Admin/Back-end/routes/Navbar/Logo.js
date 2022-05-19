const { Router } = require('express')
const router = Router()
const fileUpload = require('../../middleware/fileUpload')
const { NavbarLogo, NavbarLogoEdit, NavbarLogoDelete } = require('../../controllers/Navbar')

router.route('/logo').post(fileUpload.single("image"), NavbarLogo)
router.route('/logo/edit/:id').put(fileUpload.single("image"), NavbarLogoEdit)
router.route('/logo/delete/:id').get(fileUpload.single("image"), NavbarLogoDelete)

module.exports = router