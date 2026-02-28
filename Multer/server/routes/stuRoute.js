const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController");

route.post("/upload",stuController.Upload)
route.get("/display",stuController.Display)
module.exports=route;