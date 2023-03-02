import { Request, Response } from "express";
import { prisma } from "../config/db";

export const Register = async (req:Request, res:Response)=>{
    try{
        const user = req.body;
        await prisma.user.create({
            data: user,
        });
        res.json({
            message: 'USER CREATED',
        })
    }catch(err){
        console.log(err);
    }
}

export const Login = async (req:Request, res:Response)=>{
    try{
        const { username, password } = req.body;
        const users = await prisma.user.findFirst({
            where:{
                username,
                password
            },

        });
        if(!users){
            res.json({
                message: `WRONG USERNAME OR PASSWORD!`
            });
        }
        res.json({
            message: `wellcome back ${username}`
            
        });
    } catch(err){

    }
}

export const getAllUsers = async (req:Request, res:Response)=>{
    try{
        const user = req.body;
        let users = await prisma.user.findMany();
        res.json(users)
    }catch(err){
        console.log(err);
    }
}