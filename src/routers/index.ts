import express from 'express'
import home from './home'
import register from './register'
import auth from './auth'

const router = express.Router()

router.get('/', home)
router.post('/register', register)
router.post('/auth', auth)

export default router
