import { PrismaClient } from '@prisma/client';
import {Request,Response} from 'express'
const prisma = new PrismaClient();

export const distributePayroll= async(req:Request,res:Response)=>{
    const {employeeId,month}= req.body;
    const employee= await prisma.employee.findUnique({where:{id:employeeId}});
    if(!employee){
        return res.status(404).json({message:"Employee is not found"})
    }
    const payroll = await prisma.payroll.create({
        data:{
            employeeId,
            month,
            amount:employee.netPay
        }
    });
    res.status(201).json(payroll);
}
