const express=require("express");
const app=express();
const ejs=require("ejs");
const stuRoute=require("./routes/stuRouter")



app.set("view engine","ejs");
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/newdb").then(()=>{
    console.log("Db succefully connected....");
    
})

app.use("/",stuRoute)



app.listen(8000,()=>{
    console.log("Server run on 8000");
    
})
