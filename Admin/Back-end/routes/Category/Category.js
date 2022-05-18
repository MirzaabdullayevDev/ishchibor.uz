const { Router } = require('express')
const router = Router()
const { Category, CategoryEdit, CategoryDelete } = require('../../controllers/Category')
const fileUpload = require('../../middleware/fileUpload')

router.route('/category').post(fileUpload.single("image"), Category)
router.route('/categoryUpdate/:id').put(fileUpload.single("image"), CategoryEdit)
router.route('/categoryDelete/:id').post(CategoryDelete)

module.exports = router