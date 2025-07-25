import jwt from 'jsonwebtoken';
import { threadId } from 'worker_threads';
const  secret =process.env.JWT_SECRET;
if(!secret){
    throw new Error("JWT_SECRET is not define in env")
}
export const signToken =(payload: any)=>{
    return jwt.sign(payload,secret,{expiresIn:"1h"})
};