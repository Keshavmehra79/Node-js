
const express=require("express");
const app=express();
const empRoute=require("./routes/empRouter")
const mongoose=require("mongoose");
const cors=require("cors");
const bodyparser=require("body-parser")
app.use(cors())
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
mongoose.connect("mongodb://127.0.0.1:27017/JWT").then(()=>{
    console.log("Db connected succefully");
})  





app.use("/employees",empRoute);


app.listen(4000,()=>{
    console.log("server run on 4000 port ");
    
})