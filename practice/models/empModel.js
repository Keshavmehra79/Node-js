const mongoose=require("mongoose");
const empScheme= new mongoose.Schema({
    empid:Number,
    empname:String,
    designation:String,
    salary:Number
})


module.exports=mongoose.model("employee",empScheme);