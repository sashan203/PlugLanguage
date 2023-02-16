const Router = require('express')
const router = new Router()
const backetController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', backetController.getAll)
router.post('/', authMiddleware,backetController.create)

module.exports = router