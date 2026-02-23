const express=require("express");
const route=express.Router();
const stuControllers=require("../controllers/stuController")
route.get("/",stuControllers.Home);
route.get("/home",stuControllers.Home);
route.get("/about",stuControllers.About);
route.get("/faculty",stuControllers.Faculty);
route.get("/courses",stuControllers.Course);
route.get("/contact",stuControllers.Contact);


module.exports=route;