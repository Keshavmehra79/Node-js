const express=require("express");
const app=express();

const stuRoute=require("./routers/stuRoutes");
app.use("/students",stuRoute);



app.listen(9000,()=>{
    console.log("Server run on 9000 port ")
});