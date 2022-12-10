
const {model,Schema}=require("mongoose");

const allBlogsSchema=new Schema({
    author:String,
    blogCategory:String,
    blog:String,
    date:Date,
    image:String,
    author:String
});


const blogModel=model("allblog",allBlogsSchema);

module.exports=blogModel;