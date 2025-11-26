const express=require("express");
const employeesCntrl=require("../controller/employeesCntrls")
const route=express.Router();

route.get("/",employeesCntrl.firstpage);
route.get("/home",employeesCntrl.home);
route.get("/designation",employeesCntrl.designation);
route.get("/department",employeesCntrl.department);
route.get("/address",employeesCntrl.addresss);
route.get("/contact",employeesCntrl.contact);

module.exports=route;