
const jwt=require("jsonwebtoken")

 const verifyTokenMiddleware=(req,res,next)=>{
const token=req.headers.authorization;
console.log(token)
try{

    if(token){
        let verify=jwt.verify(token,"SECRET1234");
        if(verify){
          return   next();
        }
        else{
        return res.send({msg:"session expired"})
        }
        }
}
catch(e){
    res.send({msg:"session expired"})
}


}

module.exports=verifyTokenMiddleware;