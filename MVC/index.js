const express=require("express");
const mongoose=require("mongoose");

const app=express();
const bodyparser=require("body-parser")
const route=require("./routes/stuRoutes")

app.set("view engine","ejs")
mongoose.connect("mongodb://127.0.0.1:27017/apporvdb");

//body-parser middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use("/students",route);

app.listen(9000,()=>{
    console.log("Server Running........")
});