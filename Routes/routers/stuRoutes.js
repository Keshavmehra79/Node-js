const express=require("express");
const route=express.Router();

route.get("/home",(req,res)=>{
    res.send("<h1>This is home page</h1>")
})

route.get("/about",(req,res)=>{
    res.send("<h1>This is about page<h1>")
})

route.get("/contact",(req,res)=>{
    res.send("<h1>This is contat page</h1>")
})

route.get("/service",(req,res)=>{
    res.send("<h1>This is service page!!!!!!!!</h1>")
})

module.exports=route;
