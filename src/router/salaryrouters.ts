import express from 'express'
import { calculateSalary} from '../controller/salary'
const router = express.Router()
router.post('/api/calculateSalary',calculateSalary)
export default router;