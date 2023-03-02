import { Request, Response } from "express";
import { prisma } from "../config/db";

export const createBlog = async(req:Request, res:Response)=>{
    try{
        const blog = req.body
        await prisma.blog.create({
            data: blog,
        })
        res.json({message: "Blog Created"})
    }catch(err){
        console.log(err);
        
    }
}
export const getAllBlog = async(req:Request, res:Response)=>{
    try{
        const blogs = await prisma.blog.findMany({});
        res.json(blogs)

    }catch(err){
        console.log(err);
    }
}
export const getUserWithBlog = async(req:Request, res:Response)=>{
    try{
        const { id } = req.params
        const userId = await prisma.blog.findMany({
            where:{
                user_id: id,
            },
            select:{
                title: true,
                createData: true,
                user:{
                    select:{
                        username: true,
                        email: true,
                    }
                }
            }
        })
        res.json(userId)
    }catch(err){
        console.log(err);
    }
}
export const updateBlog = async(req:Request, res:Response)=>{
    try{
        const { id } = req.params
        const blog = req.body
        const update = await prisma.blog.update({
            where: {
                id: id,
            },
            data: blog,
        })
    }catch(err){
        console.log(err);
    }
}
export const deleteBlogs = async(req:Request, res:Response)=>{
    try{
        const { id } = req.params
        await prisma.blog.deleteMany({
            where: {
                user_id: id,
            }
        })
    }catch(err){
        console.log(err);
    }
}

export const deleteBlog = async(req:Request, res:Response)=>{
    try{
        const { id } = req.params
        await prisma.blog.delete({
            where: {
                id: id,
            }
        })
    }catch(err){
        console.log(err);
    }
}
