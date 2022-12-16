const express=require("express");
const app=express();
app.use(express.json());
const nodeMailer=require('nodemailer');
const userModel=require("../models/user");
require('dotenv').config();

const transport=nodeMailer.createTransport({

    service: 'gmail',
  auth: {
    user: 'ankit.s8080@gmail.com',
    pass: process.env.GMAIL_PASSWORD_FOR_EMAIL_PASS
  }
})

app.post("/forgotpass",async(req,res)=>{
    const email=req.body;
    //console.log(email)
   try{
    const user=await userModel.findOne({email:email.email});
    //console.log(user)m
    if(user){
        let val=Math.floor(1000+Math.random()*9000);
        transport.sendMail({
            to:email.email,
            subject:"This Mail is regarding Change the password in our Blog website",
            html:`<h2>Otp:${val}</h2>`
        })
     return   res.send({msg:"ok",otp:val,email:user.email})
    }
    else{
        return res.send({msg:"no"})
    }
   }
   catch(e){
console.log(e.message)
   }
})



app.post("/setforgotpass",async(req,res)=>{
 console.log(req.body)
    if(req.body.storeOtp!==Number(req.body.otp)){
      return  res.send({msg:"no"})
    }
 else{
   try{
    const user=await userModel.findOneAndUpdate({email:req.body.email},{$set:{password:req.body.password}});
    console.log(user)
    
     return   res.send({msg:"ok"})
    }

   
   catch(e){
console.log(e.message)
   }
 }

})



module.exports=app;