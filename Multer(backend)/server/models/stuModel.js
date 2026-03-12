const mongoose=require("mongoose");
const stuSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    defaultImage:String,
    images:[String]
})

module.exports=mongoose.model('student2',stuSchema)