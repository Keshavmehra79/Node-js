const express=require("express");
const stuControllers=require("../controllers/stuControllers")
const route=express.Router();

route.get("/home",stuControllers.home)
route.get("/about",stuControllers.about)
route.get("/contact",stuControllers.contact)
route.post("/save",stuControllers.datasave) 
route.get("/service",stuControllers.servicepage) 

module.exports=route;