const express=require("express");
const app=express();
const stuRoute=require("./routes/stuRoutes")
app.set("view engine","ejs")

app.use("/students",stuRoute)
app.listen(9000,()=>{
    console.log("Server running")
})