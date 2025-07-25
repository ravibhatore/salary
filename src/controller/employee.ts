import {Request,Response} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const createEmployee = async(req:Request,res:Response)=>{
    const {name,basicSalary,hra,allowances,tax,pf,role}= req.body;
  if(role !=="admin" || role !=="hr"){
        return res.status(403).json({message:"access denied only hr and admin can create employee"})
    }    
    const netPay = basicSalary+hra+allowances-tax-pf;
    const employee = await prisma.employee.create({
        data:{name,basicSalary,hra,allowances,tax,pf,netPay},
    });
    res.status(201).json(employee)

};
export const getEmployee = async(req:Request,res:Response)=>{
    const employee = await prisma.employee.findMany();
    res.json(employee)
};