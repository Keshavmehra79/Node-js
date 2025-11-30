const express=require("express");
const bodyparser=require("body-parser")
const mongoose=require("mongoose");
const app=express();
const route=require("./routes/empRouter")

app.set("view engine","ejs")
mongoose.connect("mongodb://127.0.0.1:27017/trial").then(()=>{
    console.log("working(db connected)")
})

//
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/employees",route)

app.listen(8000,()=>{
    console.log("Server running..........")
})