const express=require("express");
const route=express.Router();
const stuControllers=require("../controllers/stuControllers")
route.get("/home",stuControllers.home)
route.get("/about",stuControllers.about)
route.get("/contact",stuControllers.contact)
route.get("/service",stuControllers.service)

module.exports=route;
