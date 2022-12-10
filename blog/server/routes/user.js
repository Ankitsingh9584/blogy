const userModel=require("../models/user");
const express=require("express");
const app=express();
const jwt=require("jsonwebtoken")
app.post("/register",async(req,res)=>{
    let userDetails=req.body;
    console.log(userDetails)
    try{
        let existUser=await userModel.findOne({email:userDetails.email});
        if(existUser){
            res.send("user with this email already registered");
        }
        else{
            let data=await userModel.create(userDetails);
            res.send({message:"ok"})
        }
        
    }
    catch(e){
res.send(e.message)
    }
  
})

app.post("/login",async(req,res)=>{
    let user=req.body;
    // console.log(user)
    try{

   let weGetUser=await userModel.findOne({email:user.email,password:user.password});
   console.log(weGetUser)
   if(weGetUser){
  const token=  jwt.sign({id:weGetUser._id,email:weGetUser.email,name:weGetUser.name},"SECRET1234",{expiresIn:"7 days"});
   console.log(token)
  res.send({message:"ok",token:token,userName:weGetUser.name})
   

}
else{
    res.send({message:"no"})
}

    }
    catch(e){
res.send(e.message)
    }
})


module.exports=app;