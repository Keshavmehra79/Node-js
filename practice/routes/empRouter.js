const express=require("express");
const empControllers=require("../controllers/empControllers")
const route=express.Router();

route.get("/home",empControllers.home)
route.get("/insert",empControllers.insert)
route.get("/display",empControllers.display)
route.post("/save",empControllers.datasave)
route.get("/display",empControllers.display)


module.exports=route;