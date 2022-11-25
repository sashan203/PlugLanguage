const Router = require('express')
const router = new Router()
const backetController = require('../controllers/basketController')

router.get('/', backetController.getAll)
router.post('/:id',backetController.create)

module.exports = router