const express=require("express");
const studControllers=require("../controllers/studControllers")
const route=express.Router();
route.get("/",studControllers.mainpage)
route.get("/home",studControllers.home)
route.get("/about",studControllers.about)
route.get("/contact",studControllers.contact)
route.get("/service",studControllers.service)


module.exports=route;