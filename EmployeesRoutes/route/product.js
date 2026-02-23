const express=require("express");
const route=express.Router();

route.get("/info",(req,res)=>{
    res.send("<h1>This is info product page</h1>")
})

route.get("/store",(req,res)=>{
    res.send("<h1>This is store</h1>")
})

route.get("/sales",(req,res)=>{
    res.send("<h1>This is sales page</h1>")
})

route.get("/photo",(req,res)=>{
    res.send("<h1>This is Phto page</h1>")
})

module.exports=route;

//info,store,sales,photo

const arr=[1,2,3,[4,5,6],7,[8,9]]
