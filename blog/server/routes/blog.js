const blogModel=require('../models/blog');
const express=require('express');
const app=express();
const verifyTokenMiddleware=require("../middlewares/verifyToken");
app.use(express.json());

// use verifyTokenMiddleware  inside this createblog route so you verify token is valid or not
app.post("/createblog",verifyTokenMiddleware, async(req,res)=>{
    const blogDetails=req.body;
   
 let response=  await blogModel.create(blogDetails);
 //console.log(response);
    res.send({msg:"ok"})
})

app.get("/getblogs",async(req,res)=>{
    let response=await blogModel.find();
   // console.log(response)
res.send(response);
})

module.exports=app;