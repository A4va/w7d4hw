import express from "express";
import { connectDB } from "./config/db";
import userRouter from "./router/user.router";
import blogRouter from "./router/blog.router";

let port = 3003

const app = express();
app.use(express.json())
connectDB();
app.use('/user', userRouter)
app.use('/blog', blogRouter)

app.listen(port, ()=>{
    console.log(`PORT = ${port}`); 
});