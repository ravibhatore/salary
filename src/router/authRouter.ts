import express from 'express'
import { login,logout,register } from '../controller/auth'
const router = express.Router()
router.post('/api/login',login)
router.post('/api/logout',logout)
router.post('/api/register',register)

export default router;