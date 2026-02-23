const mongoose=require("mongoose")
const stuProfile=new mongoose.Schema({
    rollno:Number,
    stuname:String
})

module.exports=mongoose.model("student",stuProfile);