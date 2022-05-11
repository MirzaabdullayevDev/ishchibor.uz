const { Router } = require('express')
const router = Router()
const fileUpload = require('../../middleware/fileUpload')
const { NavbarLogo } = require('../../controllers/Navbar')


router.post('/logo', fileUpload.single("image"), NavbarLogo)


module.exports = router