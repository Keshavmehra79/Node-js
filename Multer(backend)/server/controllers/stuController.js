const multer=require("multer");
const {CloudinaryStorage}=require('multer-storage-cloudinary')
const cloudinary=require("../cloudinary")
const stuModel = require("../models/stuModel");

// Setup cloudinary storage to multer
const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'product-image',
        public_id:(req,file)=>Date.now()+'-'+file.originalname,
    },

});


const Upload=multer({storage:storage}).array('images',10);
const myUpload=async(req,res)=>{
    Upload(req,res,async (err)=>{
         if(err){
        console.log("Multer Error:", err);
        return res.status(500).send(err);
    }
        try{
            
            const {rollno,name,city}=req.body;
            const imageUrls= req.files.map(file=>file.path);
            const student=await stuModel.create({
                rollno:rollno,
                name:name,
                city:city,
                defaultImage:imageUrls[0],
                images:imageUrls
            })
            res.status(200).send('Data saved succefully')
        } catch(error){
            res.status(500).send("Error saving data: "+error.message)
        }
    })



}

const Display=async(req,res)=>{
    const student=await stuModel.find();
    res.send(student)
}


module.exports={
    myUpload,
    Display
}