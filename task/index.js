const express=require("express");
const app=express();
const empRoutes=require("./routes/empRoutes")

app.use("/employees",empRoutes);


app.listen(9000,()=>{
    console.log("Server runnig.....")
})