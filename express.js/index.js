const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Wellcome to my first page!!!!!!!!!")

})
app.get("/about",(req,res)=>{
    res.send("<h2>this is about page.......")
})
app.get("/contact",(req,res)=>{
    res.send("<h2>this is contact page.......")
})
app.get("/help",(req,res)=>{
    res.send("<h2>this is help page.......")
})
app.get("/services",(req,res)=>{
    res.send("<h2>this is service page.......")
})
app.listen(9000,()=>{
    console.log("Server run on 9000 port ")
});
