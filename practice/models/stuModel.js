const mongoose=require("mongoose");
const stuScheme=new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports=mongoose.model("student",stuScheme);