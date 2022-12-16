const mongoose=require("mongoose");
// mongodb://127.0.0.1:27017/blog
 const connect=async()=>{
return mongoose.connect(process.env.MONGODB_URL)
}

module.exports=connect;

