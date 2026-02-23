const mongoose=require("mongoose");
const courseSchema=new mongoose.Schema({
    fees:Number,
    course:String,
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"student"}
})

module.exports=mongoose.model("course",courseSchema);