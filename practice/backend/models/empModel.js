const mongoose=require("mongoose");

const empSchema=new mongoose.Schema({
    empname:String,
    empsalary:Number,
    email:String,
    password:String
})

module.exports=mongoose.model("JWT",empSchema);