import express from 'express'
import { distributePayroll } from '../controller/payroll'
const router = express.Router()
router.post('/api/distributePayroll',distributePayroll)
export default router;