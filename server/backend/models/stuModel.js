const mongoose=require("mongoose")
const stuModel=new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    city:String
})

module.exports=mongoose.model("students",stuModel)