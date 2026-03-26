const express=require("express");
const userController=require("../controllers/userController")
const route=express.Router();

route.post("/signup",userController.createAdmin)
route.post("/userlogin",userController.adminLogin)


module.exports=route;