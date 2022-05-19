const { Router } = require('express')
const router = Router()
const fileUpload = require('../../middleware/fileUpload')
const { NavbarMenuAdd } = require('../../controllers/Navbar')


router.route("/menu/add").get(NavbarMenuAdd)



module.exports = router