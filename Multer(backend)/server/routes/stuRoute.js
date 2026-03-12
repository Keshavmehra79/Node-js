const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController");

route.post("/stusave",stuController.myUpload)
route.get("/display",stuController.Display)

module.exports=route;