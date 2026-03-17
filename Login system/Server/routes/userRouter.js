const express=require("express");
const userController=require("../controllers/userController")
const route=express.Router();

route.post("/registration",userController.createUser)
route.post("/login",userController.userlogin)


module.exports=route;