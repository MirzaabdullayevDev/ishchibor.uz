const { Router } = require('express')
const router = Router()
const { Category   , CategoryDelete } = require('../../controllers/Category')
const fileUpload = require('../../middleware/fileUpload')

router.route('/category').post(fileUpload.single("image"), Category)
// router.route('/categoryUpdate/:id').post(fileUpload.single("image"), CategoryEdit)
router.route('/categoryDelete/:id').post( CategoryDelete)

module.exports = router