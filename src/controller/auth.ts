import {Request,Response} from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { signToken } from '../utils/jwt';
const prisma = new PrismaClient();


export const register = async(req:Request,res:Response)=>{
    const{email,password,role}= req.body;
    const existing = await prisma.user.findUnique({where:{email}});
    if(existing){
        return res.status(400).json({message:"user is already exist"})
    }
    const hashed = await bcrypt.hash(password, 10);
    await prisma.user.create({
        data:{
            email,password:hashed,role
        }
    })
    res.status(201).json({message:"user register successfully"})
}


export const login = async(req:Request,res:Response)=>{
    const{email,password}= req.body;
    const user = await prisma.user.findUnique({where:{email}})
    if(!user){
        return res.status(404).json("user not found")
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json("invalid credentials")
    }
    const token = signToken({id :user.id,role:user.role})
    res.cookie('token',token ,{httpOnly:true}).json({message:"logged in"})
}

export const logout = async(req:Request,res:Response)=>{
    res.clearCookie('token').json({message:"logout successfully"})
}