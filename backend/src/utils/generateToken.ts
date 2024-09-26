import { Response } from 'express'
import jwt from 'jsonwebtoken'


export const generateToken =(userId:String,res:Response)=>{

    
    const token = jwt.sign({userId}, process.env.JWT_SECRET!, { expiresIn: "30m" });
    res.cookie("jwt",token,{
        maxAge:24*60*1000,
        sameSite:"strict",
        secure:process.env.NODE_ENV!=="development",

    })
    return token;

    

}