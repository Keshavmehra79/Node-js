const express=require("express");
const stuController=require("../controllers/stuController");
const multer = require("multer");
const route=express.Router();

    const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); 
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname); 
  }
});

const upload=multer({storage:storage})

route.post("/upload",upload.single("myimage"),stuController.Upload)

module.exports=route