import express from 'express'
import { createEmployee, getEmployee } from '../controller/employee'
const router = express.Router()
router.post('/api/createEmployee',createEmployee)
router.get('/api/getEmployee',getEmployee)
export default router;