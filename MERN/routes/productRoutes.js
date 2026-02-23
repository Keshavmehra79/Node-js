const express=require("express");
const route=express.Router();
const productController=require("../controllers/productController")

route.get("/home",productController.home);
route.get("/purchase",productController.purchase);
route.get("/sale",productController.sale);
route.get("/stock",productController.stock);
module.exports=route;