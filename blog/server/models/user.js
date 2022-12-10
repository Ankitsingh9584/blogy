const {model,Schema} =require("mongoose");


const userRegisterSchema=new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
});

const userModel=model("user",userRegisterSchema);
module.exports=userModel;