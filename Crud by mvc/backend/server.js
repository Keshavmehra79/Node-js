const express=require("express");
const bodyparser=require("body-parser")
const app=express();
const mongoose=require("mongoose");
const cors=require("cors")
const stuRouter=require("./routes/stuRoute")
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/mydb").then(()=>{
    console.log("Db succefully connected......");
})

app.use("/students",stuRouter);


app.listen(8000,()=>{
    console.log("Server run on port 8000");
    
})