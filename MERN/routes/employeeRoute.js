const express=require("express");
const route=express.Router();
const empRoute=require("../controllers/employeeRoute");

route.get("/home",empRoute.home);
route.get("/about",empRoute.about);
route.get("/dept",empRoute.dept);
route.get("/salary",empRoute.salary);


module.exports=route;