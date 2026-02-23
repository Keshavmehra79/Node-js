const express=require("express");
const route=express.Router();
const teacherRoute=require("../controllers/teacherController")

route.get("/home",teacherRoute.homepage);

route.get("/about",teacherRoute.about);
route.get("/dept",teacherRoute.deptpage);
route.get("/salary",teacherRoute.salarypage);
module.exports=route;