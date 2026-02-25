const express=require("express");
const empController=require("../controllers/empController")
const route=express.Router();

route.get("/",empController.Home)
route.post("/insert",empController.Insert)
route.get("/display",empController.display);
route.delete("/delete",empController.myDel);
route.get("/myedit",empController.Myedit);
route.post("/savedata",empController.saveData)

module.exports=route;