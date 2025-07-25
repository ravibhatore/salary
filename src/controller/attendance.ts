import{Request,Response} from 'express'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const martAttendance = async(req:Request,res:Response)=>{
    const {employeeId,date,hoursWorked}= req.body;
    const record = await prisma.attendance.create({
        data:{employeeId,date:new Date(date),hoursWorked}
    });
    res.status(201).json(record)
};