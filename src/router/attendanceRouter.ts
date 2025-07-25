import express from 'express'
import { martAttendance } from '../controller/attendance'
const router = express.Router()
router.post('/api/martAttendance',martAttendance)
export default router;