const express=require("express");
const mongoose=require("mongoose")
const app=express();
const stuRoute=require("./routes/stuRoute")
const bodyparser=require("body-parser")
const cors=require("cors");
app.use(cors());



app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/students",stuRoute);
mongoose.connect("mongodb://127.0.0.1:27017/24feb").then(()=>{
    console.log("Db connected Succefully..........")
})
app.listen(2000,()=>{
    console.log("server run on port 2000")
})