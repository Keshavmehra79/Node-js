const express=require("express");
const app=express();
const route=require("./routes/stuRoutes")

app.set("view engine","ejs")
app.use("/students",route);

app.listen(9000,()=>{
    console.log("Server Running........")
});