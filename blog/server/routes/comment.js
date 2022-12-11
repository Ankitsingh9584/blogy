
const express=require ("express");
const app=express();
app.use(express.json());
const commentModel=require("../models/comment");


app.post("/postcomment",async(req,res)=>{
const commentData=req.body;
// console.log(commentData)
try{
    await commentModel.create(commentData);
    const data=await commentModel.find();
    res.send({msg:"yes",data:data})

}
catch(e){
    res.send({msg:"no"})
}
})

app.post("/getcomment",async(req,res)=>{

    // console.log(commentData)
    try{
    let data=    await commentModel.find()
        res.send({msg:"yes",data:data})
    
    }
    catch(e){
        res.send({msg:"no"})
    }
    })
    

// delete
app.post("/deletecomment",async(req,res)=>{

 console.log(req.body)
    try{
     await commentModel.findOneAndDelete({_id:req.body.creds});
     let data=await commentModel.find();
        res.send({msg:"yes",data:data})
    
    }
    catch(e){
        res.send({msg:"no"})
    }
    })

module.exports=app;