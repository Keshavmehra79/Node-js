const express=require("express");
const route=express.Router();
const teacherControllers=require("../controllers/teacherControllers")


route.get("/",teacherControllers.firstpage);
route.get("/home",teacherControllers.home);
route.get("/about",teacherControllers.about);
route.get("/fees",teacherControllers.fees);

module.exports=route;