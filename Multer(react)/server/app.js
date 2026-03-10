const express=require("express");
const app=express();
const mongoose=require("mongoose")
const stuRoute=require("./routes/stuRoute")
const cors=require("cors");
app.use(cors())
const bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
mongoose.connect("mongodb://127.0.0.1:27017/28feb").then(()=>{
    console.log("Db connected succefully")
})


app.use("/students",stuRoute)
app.listen(9000,()=>{
    console.log("Server on port 9000!")
})