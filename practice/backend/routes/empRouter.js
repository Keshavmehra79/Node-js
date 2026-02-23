const express=require("express");
const empController=require("../controllers/empController")
const route=express.Router();

route.get("/",empController.Home)
route.post("/insert",empController.Insert)
route.get("/display",empController.display);
route.delete("/delete",empController.myDel)

module.exports=route;