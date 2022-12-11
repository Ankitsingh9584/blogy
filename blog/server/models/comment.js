const {model,Schema}=require("mongoose");

const commentSchema=new Schema({
   comment:String,
   userId:String,
   blogId:String,
   userName:String,
   date:Date
});


const commentModel=model("comment",commentSchema);

module.exports=commentModel;