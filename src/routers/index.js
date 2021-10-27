const express = require('express')
const router = express.Router()

const home = require('./home')
const register = require('./register')
const auth = require('./auth')

router.get('/', home)
router.post('/register', register)
router.post('/auth', auth)

module.exports = router
