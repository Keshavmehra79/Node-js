const express=require("express");
const route=express.Router();

route.get("/info",(req,res)=>{
    res.send("<h1>This is info page</h1>");
})

route.get("/dept",(req,res)=>{
    res.send("<h1>This is dept record</h1>")
})

route.get("/salary",(req,res)=>{
    res.send("<h1>This is salary record</h1>")
})

route.get("/address",(req,res)=>{
    res.send("<h1>This is address</h1>")
})

module.exports=route;