const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController")
 route.post("/insert",stuController.insert)
route.get("/Display",stuController.Display)
route.post("/addbook",stuController.addbook)
module.exports=route;