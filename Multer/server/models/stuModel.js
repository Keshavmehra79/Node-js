const mongoose=require("mongoose");
const stuSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    img:String
})

module.exports=mongoose.model("student",stuSchema)