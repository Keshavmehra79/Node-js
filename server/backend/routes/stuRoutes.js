const express=require("express");
const stuControllers=require("../controllers/stuControllers")
const route=express.Router();

route.post('/save',stuControllers.savadata)
route.get('/display',stuControllers.mydata)

module.exports=route