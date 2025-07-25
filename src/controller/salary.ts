import { PrismaClient } from '@prisma/client';
import { Request,Response } from 'express';
const prisma = new PrismaClient();

export const calculateSalary = async (req:Request,res:Response)=>{
    const {employeeId,role}= req.body;
    if(role !=="admin" || role !=="hr"){
        return res.status(403).json({message:"access denied only hr and admin can access"})
    }
    const attendance= await prisma.attendance.findMany({where:{employeeId}})
    const totalHourse= attendance.reduce((sum,a)=> sum+a.hoursWorked,0);
    const employee = await prisma.employee.findUnique({where:{id:employeeId}});
    if(!employee){
        return res.status(404).json({message:"Employee is not found"})
    }
    const workingDays= 30;
    const dailyWage= (employee.basicSalary+employee.hra+employee.allowances)/workingDays
    const fullDays= totalHourse/8;
    const netPay= fullDays*dailyWage;
    await prisma.employee.update({where:{id:employeeId},data:{netPay}});
    res.json({employeeId,netPay})

}