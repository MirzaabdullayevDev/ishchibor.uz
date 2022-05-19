const { Router } = require('express')
const router = Router()

const { Sequence  , SequenceEdit , SequenceDelete} = require('../../controllers/Sequence')


router.route('/sequence').post(Sequence)
router.route('/sequenceedit/:id').put(SequenceEdit)
router.route('/sequencedelete/:id').delete(SequenceDelete)

module.exports = router
 