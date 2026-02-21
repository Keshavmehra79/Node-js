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

// app.use("/students",stuRouter);


app.get("/home",(req,res)=>{
    console.log("HOme page")
    res.send("working home page.......")
})

app.get("/about",(req,res,next)=>{
    console.log("Path level middleware1 ...")
    next()
},(req,res,next)=>{
    console.log("PAth level middleware 2")
    next()
},(req,res)=>{

    console.log("About page")
    res.send('Working About page')
})

app.use((req,res,next)=>{
   console.log("App level middlware 1")
   next();
})


app.use((req,res,next)=>{
    console.log("App level middlware 2  ");
    next();
})




app.listen(8000,()=>{
    console.log("Server run on port 8000");
    
})