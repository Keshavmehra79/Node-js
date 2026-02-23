const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController")
route.post("/insert",stuController.Insert);
route.get("/display",stuController.Display);


module.exports=route;