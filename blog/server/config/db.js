const mongoose=require("mongoose");
// mongodb://127.0.0.1:27017/blog
 const connect=async()=>{
return mongoose.connect("mongodb+srv://ankit:ankit@cluster0.beo4ggn.mongodb.net/blog")
}

module.exports=connect;

