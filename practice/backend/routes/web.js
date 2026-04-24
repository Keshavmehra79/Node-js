import express from "express";
import stuController from "../controllers/stuController.js";
const route=express.Router();

route.get("/setsession",stuController.display_session_info);
route.get("/displaysession",stuController.display_session_info);


export default route