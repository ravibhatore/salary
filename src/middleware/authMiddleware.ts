import { req, res,next} from 'express'
import jwt from 'jsonwebtoken'

export const authenticate = (req:req ,res:res,next:next)=>{
    const token = req.cookie.token;
    if(!token){
        return res.status(401).json({message:"No token provided"})
    }
    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        (req as any).user = decoded;
        next();
    }catch(err){
        res.status(401).json({message:"invalid token"})
    }
}
