const stuprofileModel=require("../models/stuprofileModel");
const courseModel=require("../models/courseModel")


const Insert=async(req,res)=>{
    const { rollno,name,course,fees}=req.body;
    const student=await stuprofileModel.create({
        rollno:rollno,
        stuname:name
    })

    const stucourse=await courseModel.create({
        course:course,
        fees:fees,
        userid:student._id
    })
    res.send("Data sent succfully");
}

const Display =async(req,res)=>{
    const student=await courseModel.find().populate("userid")
    res.send(student)
}

module.exports={
    Insert,
    Display
}