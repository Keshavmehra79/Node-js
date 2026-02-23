const express=require("express");
const app=express();
const mongoose=require("mongoose")
const cors=require("cors");
const stuRoute=require("./routes/stuRoute")
app.use(cors());
const bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/students",stuRoute)

mongoose.connect("mongodb://127.0.0.1:27017/22feb").then(()=>{
    console.log("Db suuccefully connected.......")
})




app.listen(1000,(req,res)=>{
    console.log("Server run on 1000 port .....")
})