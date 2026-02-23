const mongoose=require("mongoose");

const empSchema=new mongoose.Schema({
    empname:String,
    empsalary:Number,
    designation:String,
    empcity:String
})

module.exports=mongoose.model("practicedbs",empSchema);