const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController")

route.get("/",stuController.home)
route.post("/savedata",stuController.saveData)
route.get("/display",stuController.display)
route.get("/delete", stuController.MyDelete)
route.get("/myedit",stuController.myedit)
module.exports=route;