import express from "express";
import stuController from "../controllers/stuController.js";
const route=express.Router();

route.post("/login",stuController.Login);
route.get("/getuser",stuController.getUser);
route.post("/logincookie",stuController.LoginCookie);
route.get("/getcookie",stuController.getCookie);

export default route