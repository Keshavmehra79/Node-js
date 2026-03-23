const express=require("express");
const empController=require("../controllers/empController")
const route=express.Router();

route.post("/signup",empController.Signup)
route.post("/login",empController.Login)
route.post("/userauth",empController.userAuth)


module.exports=route;