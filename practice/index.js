const express=require("express");
const app=express();
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const route=require("./routes/stuRoutes")



app.set("view engine","ejs");
mongoose.connect("mongodb://127.0.0.1:27017/newdb");
//body parser
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use("/students",route)

app.listen(9000,()=>{
    console.log("Server running.........")
})