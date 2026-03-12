require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose")
const stuRoute=require("./routes/stuRoute")
const cors=require("cors");
app.use(cors())
const bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Db connected succefully")
})


app.use("/students",stuRoute)
app.listen(process.env.PORT,()=>{
    console.log("Server on port 9000!")
})