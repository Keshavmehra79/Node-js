const express=require("express");
const app=express();
const empRoute=require("./route/empRoutes")
const product=require("./route/product")
app.use("/employees",empRoute);
app.use("/product",product)

app.listen(5000,()=>{
    console.log("Server run on 5000");
    
})

