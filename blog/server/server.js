const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const connect=require("./config/db");

// routes
const userRegister=require("./routes/user")
const blog=require("./routes/blog");
const googleAuth=require("./routes/googleAuth")


app.use("/user",userRegister)
app.use("/blog",blog)
app.use("/auth",googleAuth)
app.listen(8080,async()=>{
await connect();
})